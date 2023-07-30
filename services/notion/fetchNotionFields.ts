import { Client } from '@notionhq/client';
import Redis from 'ioredis';
import { NextApiResponse } from 'next';

const redisURL = new URL(process.env.REDIS_URL!);
const connectionObject = {
  dialect: redisURL.protocol.split(':')[0],
  database: redisURL.pathname.split('/')[1],
  username: redisURL.username,
  password: redisURL.password,
  host: redisURL.hostname,
  port: redisURL.port ? parseInt(redisURL.port, 10) : undefined,
  schema: redisURL.searchParams.get('schema') || undefined,
};

const redis = new Redis(connectionObject);

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getAllFieldsFromNotion = async (
  database_id: string,
  prevResults: string[] = [],
  start_cursor?: string,
): Promise<unknown> => {
  if (process.env.NEXT_PUBLIC_TEST) {
    return undefined;
  }

  //Check if redis key existing
  const key = `${database_id}_data`;

  if (await redis.exists(key)) {
    return JSON.parse((await redis.get(key)) as string);
  }

  const page_size = 100;

  const query = await notion.databases.query({
    database_id,
    page_size,
    start_cursor,
  });

  const results: string[] = [...prevResults];

  results.push(...query.results.map((r) => r.id));

  if (query.has_more) {
    return getAllFieldsFromNotion(database_id, results, query.next_cursor as string);
  } else {
    const data = await Promise.all(
      results.map(async (pageId) => {
        const page = await notion.pages.retrieve({ page_id: pageId });

        const result: Record<string, unknown> = {};

        //@ts-ignore
        for (const [key, { id }] of Object.entries(page.properties)) {
          const value: any = await notion.pages.properties.retrieve({ page_id: pageId, property_id: id });

          if (value?.url) {
            result[key] = value.url;
            continue;
          }

          if (value?.date) {
            result[key] = value.date;
            continue;
          }

          if (value?.results) {
            if (value?.results[0]?.rich_text?.plain_text) {
              result[key] = value?.results[0]?.rich_text.plain_text;
              continue;
            }

            if (value?.results[0]?.title?.plain_text) {
              result[key] = value?.results[0]?.title?.plain_text;
              continue;
            }
          }

          if (value?.select) {
            result[key] = value?.select?.name;
            continue;
          }

          result[key] = undefined;
        }

        return result;
      }),
    );

    await redis.set(key, JSON.stringify(data));

    return data;
  }
};

export const invalidatePages = async (res: NextApiResponse) => {
  const keys = await redis.keys('*');
  for (const key of keys) {
    await redis.del(key);
  }

  await res.revalidate('/about');
  await res.revalidate('/cv');
  await res.revalidate('/gaming');
  await res.revalidate('/');
  await res.revalidate('/news');
  await res.revalidate('/projects');
  await res.revalidate('/tools');
};

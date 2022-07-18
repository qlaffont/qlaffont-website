import { Client } from '@notionhq/client';

export const getAllFieldsFromNotion = async (
  database_id: string,
  prevResults: string[] = [],
  start_cursor?: string,
): Promise<unknown> => {
  const notion = new Client({
    auth: process.env.NOTION_TOKEN,
  });

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

    return data;
  }
};

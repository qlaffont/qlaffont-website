import { writeFileSync } from 'fs';
import { join } from 'path';

const QUERY = `
  query Publication ($host: String!){
    publication(host: $host) {
      posts (first:3){
        edges{
          node {
            title
            brief
            slug
            coverImage {
              url
            }
            publishedAt
          }
        }
      }
    }
  }
`;

async function main() {
  const res = await fetch('https://gql.hashnode.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: QUERY,
      variables: { host: 'blog.qlaffont.com' },
    }),
  });

  const body = await res.json();

  if (body.errors?.length) {
    console.error(body.errors);
    process.exit(1);
  }

  const edges = body.data?.publication?.posts?.edges;
  if (!Array.isArray(edges)) {
    console.error('Unexpected Hashnode response: missing publication.posts.edges');
    process.exit(1);
  }

  const posts = edges.map((e) => e.node);
  const out = join(process.cwd(), 'static_data', 'news.json');
  writeFileSync(out, `${JSON.stringify(posts, null, 2)}\n`, 'utf8');
  console.log(`Wrote ${posts.length} posts to ${out}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

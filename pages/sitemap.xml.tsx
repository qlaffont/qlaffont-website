import fs from 'fs';
import { NextApiResponse } from 'next';

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Sitemap = () => {};

export const getServerSideProps = ({ res }: { res: NextApiResponse }) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const staticPages = fs
    .readdirSync('pages')
    .filter((staticPage) => {
      return !['api', '_app.tsx', '_document.tsx', '_error.tsx', '404.tsx', 'sitemap.xml.tsx', 'cv.tsx'].includes(
        staticPage,
      );
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath.replace('.tsx', '').replace('index', '')}`;
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>hourly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;

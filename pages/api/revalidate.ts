import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await res.revalidate('/about');
    await res.revalidate('/cv');
    await res.revalidate('/gaming');
    await res.revalidate('/');
    await res.revalidate('/news');
    await res.revalidate('/projects');
    await res.revalidate('/tools');
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}

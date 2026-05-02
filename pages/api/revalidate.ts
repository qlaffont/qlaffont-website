import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const raw = req.query.page as string | undefined;
    if (!raw) {
      return res.status(400).json({ message: 'Missing page query parameter' });
    }
    const path = raw.startsWith('/') ? raw : `/${raw}`;
    await res.revalidate(path);
    return res.json({ revalidated: true, path });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error revalidating');
  }
}

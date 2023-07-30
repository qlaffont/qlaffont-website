import { NextApiRequest, NextApiResponse } from 'next';

import { invalidatePages } from '../../services/notion/fetchNotionFields';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await invalidatePages(res);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).send('Error revalidating');
  }
}

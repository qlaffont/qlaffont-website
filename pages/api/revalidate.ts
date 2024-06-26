import { NextApiRequest, NextApiResponse } from 'next';

import { invalidatePages } from '../../services/notion/fetchNotionFields';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await invalidatePages(res, req.query.page as string);
    return res.json({ revalidated: true });
  } catch (err) {
    console.log(err);
    return res.status(500).send('Error revalidating');
  }
}

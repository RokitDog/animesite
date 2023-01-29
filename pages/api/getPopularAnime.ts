// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { popularAnime } from '../../utils/fetchPopularAnime'




export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
    const result = await popularAnime()
     return res.status(200).json(result)
    } catch (err) {
       return res.status(500).json({ error: 'failed to load data' })
    }
}

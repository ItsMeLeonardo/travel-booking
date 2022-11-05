import type { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
  id: string
  picture: string
}

const saved = [
  {
    picture: 'https://i.pinimg.com/236x/11/dd/29/11dd29e31c4633a7fafbb1e0336a93bb.jpg',
  },
  {
    picture: 'https://i.pinimg.com/564x/90/21/ba/9021ba02649c0904b14fbf94b5a9489c.jpg',
  },
  {
    picture: 'https://i.pinimg.com/236x/d8/02/23/d802235866f2f70df3d122eec4a3f996.jpg',
  },
  {
    picture: 'https://i.pinimg.com/236x/fe/e8/f6/fee8f6c0419006f12d27ee3812cb54c1.jpg',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
  const data = saved.map((save) => {
    return {
      ...save,
      id: save.picture,
    }
  })

  setTimeout(() => {
    res.status(200).json(data)
  }, 1000)
}

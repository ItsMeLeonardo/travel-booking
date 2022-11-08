import type { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
  id: string
  picture: string
}

const saved = [
  {
    picture:
      'https://images.unsplash.com/photo-1667644549367-eeece78622dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1667645336881-ef64b3fb3cde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1667589058626-1ccff4a76f51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    picture:
      'https://images.unsplash.com/photo-1667530269833-34e6823185d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
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
  }, 2000)
}

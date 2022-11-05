import type { NextApiRequest, NextApiResponse } from 'next'

import type { Feed } from 'entities/feed'

const places: Feed[] = [
  {
    id: '1',
    placeImage:
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    userName: 'John Doe',
    avatar: 'https://i.pinimg.com/236x/f7/0e/b8/f70eb8b054e0d9e3ab672569a037f326.jpg',
  },
  {
    id: '2',
    placeImage:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    userName: 'Anna Doe',
    avatar: 'https://i.pinimg.com/236x/60/ad/2f/60ad2fbaa11979a9e8b489de4b18b2c5.jpg',
  },
]

export default function handle(req: NextApiRequest, res: NextApiResponse<Feed[]>) {
  setTimeout(() => {
    res.status(200).json(places)
  }, 2000)
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import type { History } from 'entities/history'

const users = [
  { id: '1', name: 'Lisa', avatar: 'https://i.pinimg.com/236x/37/55/3f/37553f29b868fed95dcb144ee5eaa5bf.jpg' },
  {
    id: '25',
    name: 'Sonia',
    avatar: 'https://i.pinimg.com/236x/00/7b/df/007bdf11783b0ef6c058eed5261f7523.jpg',
  },
  {
    id: '2',
    name: 'John',
    avatar: 'https://i.pinimg.com/236x/8d/b8/eb/8db8ebaa978d0c901bbf64317c96cfca.jpg',
  },
  {
    id: '3',
    name: 'Anna',
    avatar:
      'https://images.unsplash.com/photo-1512646605205-78422b7c7896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmVvbiUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '4',
    name: 'diego',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: '4',
    name: 'Maria',
    avatar: 'https://i.pinimg.com/236x/60/ad/2f/60ad2fbaa11979a9e8b489de4b18b2c5.jpg',
  },
  { id: '6', name: 'Lisa', avatar: 'https://i.pinimg.com/236x/37/55/3f/37553f29b868fed95dcb144ee5eaa5bf.jpg' },

  {
    id: '7',
    name: 'John',
    avatar: 'https://i.pinimg.com/236x/8d/b8/eb/8db8ebaa978d0c901bbf64317c96cfca.jpg',
  },
  {
    id: '8',
    name: 'Maria',
    avatar: 'https://i.pinimg.com/236x/60/ad/2f/60ad2fbaa11979a9e8b489de4b18b2c5.jpg',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<History[]>) {
  setTimeout(() => {
    res.status(200).json(users)
  }, 1000)
}

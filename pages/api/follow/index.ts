import type { NextApiRequest, NextApiResponse } from 'next'

export type Data = {
  name: string
  username: string
  avatar: string
  email: string
  followed?: boolean
  id: string
}

const users = [
  {
    name: 'Anna Doe',
    username: 'annaDev',
    avatar: 'https://i.pinimg.com/236x/26/51/f8/2651f864dbbbffb7f3cc0521b9f5a1e0.jpg',
    email: 'anna@mail.com',
    followed: true,
  },
  {
    name: 'John Doe',
    username: 'johnDev',
    avatar: 'https://i.pinimg.com/236x/6f/87/a5/6f87a55bca4863ec49b72f323828abd0.jpg',
    email: 'jhon@mail.com',
  },
  {
    name: 'Jane Doe',
    username: 'janeDev',
    avatar: 'https://i.pinimg.com/236x/fe/74/cd/fe74cd9bb6f7bd19b8806208bd9e9eeb.jpg',
    email: 'jane@gmai.com',
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
  const data = users.map((user) => {
    return {
      ...user,
      id: user.email,
    }
  })

  setTimeout(() => {
    res.status(200).json(data)
  }, 3000)
}

import type { NextApiRequest, NextApiResponse } from 'next'

import type { Feed } from 'entities/feed'

import type { FeedFilters } from 'app/(width-user-grid)/home/feed/[slug]/page'

const places: Feed[] = [
  {
    id: '1',
    placeImage:
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    userName: 'John Doe',
    avatar: 'https://i.pinimg.com/236x/f7/0e/b8/f70eb8b054e0d9e3ab672569a037f326.jpg',
    tag: ['following', 'popular'],
  },
  {
    id: '2',
    placeImage:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    userName: 'Anna Doe',
    avatar: 'https://i.pinimg.com/236x/60/ad/2f/60ad2fbaa11979a9e8b489de4b18b2c5.jpg',
    tag: ['following'],
  },
  {
    id: '3',
    placeImage:
      'https://images.unsplash.com/photo-1667573680410-be0c936eb065?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    userName: 'Gina Doe',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    tag: ['following', 'popular'],
  },
  {
    id: '4',
    placeImage:
      'https://images.unsplash.com/photo-1667571787548-3c7b8f484f56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    userName: 'Frank Smith',
    avatar:
      'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    tag: ['popular', 'newest'],
  },
  {
    id: '5',
    placeImage:
      'https://images.unsplash.com/photo-1667565454350-fd0484baaa2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
    userName: 'Mateo Mark',
    avatar:
      'https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    tag: ['newest'],
  },
  {
    id: '6',
    placeImage:
      'https://images.unsplash.com/photo-1610802752018-795027c7eca9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dG9raW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    userName: 'patrycja chociej',
    avatar:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    tag: ['following', 'newest'],
  },
]

export type ErrorResponse = {
  message: string
  filter: string
}

export default function handle(req: NextApiRequest, res: NextApiResponse<Feed[] | ErrorResponse>) {
  const filter = req.query.slug as FeedFilters

  if (filter && !['following', 'popular', 'newest', 'all'].includes(filter)) {
    return res.status(400).json({ message: 'Invalid filter', filter: filter })
  }

  if (filter === 'all') {
    return res.status(200).json(places)
  }

  const filteredPlaces = places.filter((place) => place.tag.includes(filter))

  setTimeout(() => {
    res.status(200).json(filteredPlaces)
  }, 2000)
}

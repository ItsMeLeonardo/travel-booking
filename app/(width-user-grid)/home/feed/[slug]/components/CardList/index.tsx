import PlaceCard from 'components/PlaceCard'

import style from './cardList.module.css'

import type { Feed } from 'entities/feed'
import type { ErrorResponse as FeedError } from 'pages/api/feed/[slug]'

import type { FeedFilters } from '../../page'

type Props = {
  filter: FeedFilters
}

const getFeedCard = async (filter: FeedFilters) => {
  const response = await fetch(`http://localhost:3000/api/feed/${filter}`)

  if (response.status === 400) {
    const error = (await response.json()) as FeedError
    return error
  }
  const feed = await response.json()
  return feed as Feed[]
}

export default async function CardList({ filter }: Props) {
  const feed = await getFeedCard(filter)

  if (!Array.isArray(feed)) throw new Error(feed.filter)

  return (
    <div className={style.list}>
      {feed.map((place) => (
        <PlaceCard key={place.userName} {...place} focusable />
      ))}
    </div>
  )
}

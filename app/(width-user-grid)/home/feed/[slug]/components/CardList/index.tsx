import PlaceCard from 'components/PlaceCard'

import style from './cardList.module.css'

import type { FeedFilters } from '../../page'
import { getFeed } from 'services/feed'

type Props = {
  filter: FeedFilters
}

export default async function CardList({ filter }: Props) {
  const feed = await getFeed(filter)

  if (!Array.isArray(feed)) throw new Error(feed.filter)

  return (
    <div className={style.list}>
      {feed.map((place) => (
        <PlaceCard key={place.userName} {...place} focusable />
      ))}
    </div>
  )
}

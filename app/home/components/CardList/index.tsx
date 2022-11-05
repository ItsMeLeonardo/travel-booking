import PlaceCard from 'components/PlaceCard'

import style from './cardList.module.css'

import type { Feed } from 'entities/feed'

const getFeedCard = async () => {
  const response = await fetch('http://localhost:3000/api/feed')

  const feed = await response.json()
  return feed as Feed[]
}
export default async function CardList() {
  const feed = await getFeedCard()

  return (
    <div className={style.list}>
      {feed.map((place) => (
        <PlaceCard key={place.userName} {...place} focusable />
      ))}
    </div>
  )
}

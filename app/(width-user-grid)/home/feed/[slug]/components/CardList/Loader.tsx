import PlaceCardLoader from 'components/PlaceCard/Loader'
import style from './cardList.module.css'

export default function CardListLoader() {
  const items = Array.from({ length: 4 }, (_, i) => i)
  return (
    <div className={style.list}>
      {items.map((i) => (
        <PlaceCardLoader key={i} />
      ))}
    </div>
  )
}

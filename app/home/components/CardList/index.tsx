import PlaceCard, { Props as CardProps } from 'components/PlaceCard'

import style from './cardList.module.css'

const places: CardProps[] = [
  {
    placeImage:
      'https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    userName: 'John Doe',
    avatar: 'https://i.pinimg.com/236x/f7/0e/b8/f70eb8b054e0d9e3ab672569a037f326.jpg',
  },
  {
    placeImage:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    userName: 'Anna Doe',
    avatar: 'https://i.pinimg.com/236x/60/ad/2f/60ad2fbaa11979a9e8b489de4b18b2c5.jpg',
  },
]

export default function CardList() {
  return (
    <section>
      <div className={style.filter}>
        <span className={style.title}>Timeline</span>
        <div className={style.options}>
          <button className={style.option}>All</button>
          <button className={style.option} data-active={true}>
            Following
          </button>
          <button className={style.option}>Newest</button>
          <button className={style.option}>Popular</button>
        </div>
      </div>
      <div className={style.list}>
        {places.map((place) => (
          <PlaceCard key={place.userName} {...place} />
        ))}
      </div>
    </section>
  )
}

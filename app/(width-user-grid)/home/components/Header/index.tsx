import HomeUser from '../User'

import style from './header.module.css'

import { History } from 'entities/history'

const getHistories = async () => {
  const response = await fetch('http://localhost:3000/api/history')
  const histories = (await response.json()) as History[]
  return histories
}

export default async function HomeHeader() {
  const histories = await getHistories()

  return (
    <header className={style.header}>
      <HomeUser isOwn name="Ann Doe" avatar="https://i.pinimg.com/236x/60/ad/2f/60ad2fbaa11979a9e8b489de4b18b2c5.jpg" />

      {histories.map(({ avatar, name }) => (
        <HomeUser key={name} name={name} avatar={avatar} />
      ))}
      <HomeUser seeAll name="see all" />
    </header>
  )
}

import HomeUser from '../User'
import { getHistories } from 'services/histories'

import style from './header.module.css'
import HeaderError from './Error'

export default async function HomeHeader() {
  const histories = await getHistories()
  if (histories instanceof Error) {
    return (
      <div className={style.header}>
        <HeaderError error={{ message: 'Error getting histories, try to refresh the page' } as Error} />
      </div>
    )
  }

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

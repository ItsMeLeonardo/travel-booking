import { Suspense } from 'react'

import CardList from './components/CardList'
import CardListLoader from './components/CardList/Loader'
import HomeHeader from './components/Header'

import HeaderLoader from './components/Header/Loader'

import style from './page.module.css'

export default function Home() {
  return (
    <>
      <Suspense fallback={<HeaderLoader />}>
        <HomeHeader />
      </Suspense>
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
        <Suspense fallback={<CardListLoader />}>
          <CardList />
        </Suspense>
      </section>
    </>
  )
}

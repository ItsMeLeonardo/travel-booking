import Button from 'components/Button'
import { ReactNode, Suspense } from 'react'
import FeedFilter from './components/FeedFilter'

import HomeHeader from './components/Header'

import HeaderLoader from './components/Header/Loader'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Suspense fallback={<HeaderLoader />}>
        <HomeHeader />
      </Suspense>
      <section>
        {false && <Button>a</Button>}
        <FeedFilter />
        {children}
      </section>
    </>
  )
}

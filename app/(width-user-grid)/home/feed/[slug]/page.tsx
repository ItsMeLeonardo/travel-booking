import { Suspense } from 'react'

import CardList from './components/CardList'
import CardListLoader from './components/CardList/Loader'

export type FeedFilters = 'all' | 'following' | 'popular' | 'newest'

type Props = {
  params: { slug: FeedFilters }
}

export default function FeedPage({ params }: Props) {
  const filter = params.slug

  return (
    <Suspense fallback={<CardListLoader />}>
      <CardList filter={filter} />
    </Suspense>
  )
}

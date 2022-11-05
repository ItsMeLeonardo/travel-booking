'use client'

import WrongFilter from './components/Errors/WrongFilter'

export default function FeedError({ error }: { error: Error }) {
  return <WrongFilter filter={error.message} />
}

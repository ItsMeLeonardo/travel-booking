import NextLink from 'next/link'

import style from './feedFilter.module.css'

const Filters = [
  {
    name: 'All',
    slug: 'all',
  },
  {
    name: 'Following',
    slug: 'following',
  },
  {
    name: 'Newest',
    slug: 'newest',
  },
  {
    name: 'Popular',
    slug: 'popular',
  },
]

export default function FeedFilter() {
  return (
    <div className={style.filter}>
      <span className={style.title}>Timeline</span>
      <div className={style.options}>
        {Filters.map(({ slug, name }) => (
          <NextLink key={slug} href={`/home/feed/${slug}`} className={style.option}>
            {name}
          </NextLink>
        ))}
      </div>
    </div>
  )
}

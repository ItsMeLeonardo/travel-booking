import type { ReactNode } from 'react'

import style from './seeAllSection.module.css'

export type Props = {
  children: ReactNode | ReactNode[]
  title: string
  to: string
}

export default function SeeAllSection({ children, title, to }: Props) {
  return (
    <section className={style.container}>
      <header className={style.header}>
        <h5 className={style.title}>{title}</h5>

        <a href={to} className={style.seeAll}>
          See all
        </a>
      </header>
      {children}
    </section>
  )
}

import NextLink from 'next/link'

import style from './style.module.css'

export default function Index() {
  return (
    <div className={style.container}>
      <NextLink href="/home" className={style.button}>
        Go Demo
      </NextLink>
    </div>
  )
}

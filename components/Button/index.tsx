import { ReactNode } from 'react'

import NextLink from 'next/link'

import style from './button.module.css'

type Props = {
  href?: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'danger'
}

export default function Button(props: Props) {
  const { href, children, variant = 'primary' } = props

  if (href) {
    return (
      <NextLink className={style.button} href={href} data-variant={variant}>
        {children}
      </NextLink>
    )
  }
  return (
    <button className={style.button} data-variant={variant}>
      {children}
    </button>
  )
}

import type { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react'
import style from './avatar.module.css'

type sizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type Props = {
  src?: string
  alt: string
  size?: sizes
  icon?: ReactNode
  bordered?: boolean
} & DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

export default function Avatar(props: Props) {
  const { src, alt, size = 'sm', icon, bordered, ...pictureProps } = props

  const hasIconAndImg = icon && src
  const justIcon = icon && !src
  const justImg = src && !icon

  if (!icon && !src) throw new Error('Avatar must have an icon or an image')

  return (
    <picture className={style.avatar} data-size={size} data-bordered={bordered} {...pictureProps}>
      {justIcon && <span className={style.icon}>{icon}</span>}
      {justImg && <img src={src} alt={alt} />}
      {hasIconAndImg && (
        <div className={style.bothContainer}>
          <img src={src} alt={alt} />
          <span className={style.icon} data-has-both>
            {icon}
          </span>
        </div>
      )}
    </picture>
  )
}

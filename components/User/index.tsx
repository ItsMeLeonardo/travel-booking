import Avatar, { Props as AvatarProps } from 'components/Avatar'
import style from './user.module.css'

export type Props = {
  name: string
  description?: string
} & AvatarProps

export default function User({ name, description, ...avatarProps }: Props) {
  return (
    <div className={style.user}>
      <Avatar size="md" {...avatarProps} />
      <div className={style.info}>
        <h5 className={style.name}>{name}</h5>
        {description && <p className={style.description}>{description}</p>}
      </div>
    </div>
  )
}

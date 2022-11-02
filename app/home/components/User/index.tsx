import Avatar from 'components/Avatar'

import Element1 from 'icons/grid/Element-1'
import AddCircle from 'icons/essetional/AddCircle'

import style from './user.module.css'

export type Props = {
  name: string
  avatar?: string
  isOwn?: boolean
  seeAll?: boolean
}

export default function HomeUser({ name, avatar, seeAll, isOwn }: Props) {
  let icon = seeAll && <Element1 size={28} />

  if (isOwn) icon = <AddCircle size={32} />

  let text = name

  if (seeAll) text = 'See all'
  if (isOwn) text = 'You'

  return (
    <div className={style.user}>
      <Avatar bordered size="lg" src={avatar} alt={name} icon={icon} />
      <span className={style.name}>{text}</span>
    </div>
  )
}

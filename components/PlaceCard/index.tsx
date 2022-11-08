import Avatar from 'components/Avatar'
import Send from 'icons/essetional/Send'
import Messages from 'icons/messages/Messages'
import Heart from 'icons/support/Heart'
import Image from 'next/image'

import style from './style.module.css'

export type Props = {
  placeImage: string
  userName: string
  avatar: string
  focusable?: boolean
}

export default function PlaceCard({ focusable, placeImage, userName, avatar }: Props) {
  const tabIndex = focusable ? 0 : -1

  return (
    <article className={style.card}>
      <picture className={style.image} tabIndex={tabIndex}>
        <Image height={1200} width={700} src={placeImage} alt="" />
      </picture>

      <footer className={style.data}>
        <div className={style.user}>
          <Avatar bordered src={avatar} alt={userName} />
          <span className={style.username}>{userName}</span>
        </div>
        <div className={style.options}>
          <button className={style.optionBtn}>
            <span className={style.icon} data-like>
              <Heart size={18} />
            </span>
            <span className={style.text}>50</span>
          </button>
          <button className={style.optionBtn}>
            <span className={style.icon} data-comment>
              <Messages size={18} />
            </span>
            <span className={style.text}>50</span>
          </button>
          <button className={style.optionBtn}>
            <span className={style.icon}>
              <Send size={18} />
            </span>
          </button>
        </div>
      </footer>
    </article>
  )
}

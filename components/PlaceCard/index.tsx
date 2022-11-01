import Send from 'icons/essetional/Send'
import Messages from 'icons/messages/Messages'
import Heart from 'icons/support/Heart'
import style from './style.module.css'

export default function PlaceCard() {
  return (
    <article className={style.card}>
      <picture className={style.image}>
        <img
          src="https://images.unsplash.com/photo-1667224974266-a1d8bfecc7fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </picture>

      <footer className={style.data}>
        <div className={style.user}>
          <picture className={style.avatar}>
            <img src="https://i.pinimg.com/564x/f0/75/49/f075496674e601a3d6915866f57671d1.jpg" alt="" />
          </picture>
          <span className={style.username}>Francine wookinn</span>
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

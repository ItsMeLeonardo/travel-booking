import style from './style.module.css'

export default function PlaceCardLoader() {
  return (
    <div className={style.loader}>
      <div className={style.image}></div>

      <div className={style.data}>
        <div className={style.user}>
          <div className={style.avatar}></div>
          <span className={style.username}></span>
        </div>
        <div className={style.options}>
          <div className={style.optionBtn}></div>
          <div className={style.optionBtn}></div>
          <div className={style.optionBtn}></div>
        </div>
      </div>
    </div>
  )
}

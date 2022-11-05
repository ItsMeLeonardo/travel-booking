import style from './cardSaved.module.css'

export default function CardSavedLoader() {
  const items = Array.from({ length: 4 }, (_, i) => i)

  return (
    <div className={style.savedGrid}>
      {items.map((i) => (
        <div key={i} className={style.loader}></div>
      ))}
    </div>
  )
}

import style from './header.module.css'

export default function HeaderLoader() {
  const items = Array.from({ length: 10 }, (_, i) => i)

  return (
    <div className={style.header}>
      {items.map((i) => (
        <div key={i} className={style.loader}>
          <div className={style.avatar}></div>
          <span className={style.name}></span>
        </div>
      ))}
    </div>
  )
}

import style from './style.module.css'

export default function Sidebar() {
  return (
    <nav className={style.sidebar}>
      <button>✈</button>

      <ul className={style.options}>
        <li className={style.item}>
          <button>🏠</button>
        </li>
        <li className={style.item}>
          <button>🏠</button>
        </li>
        <li className={style.item} data-hide-mobile>
          <button>🏠</button>
        </li>
        <li className={style.item} data-hide-mobile>
          <button>🏠</button>
        </li>
        <li className={style.item}>
          <button>🏠</button>
        </li>
      </ul>
    </nav>
  )
}

import Bookmark from 'icons/archive/Bookmark'
import Notification from 'icons/notification/Notification'
import SearchNormal from 'icons/search/SearchFavorite'
import style from './accountActivity.module.css'

export default function AccountActivity() {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <label className={style.inputSearch}>
          <span className={style.icon}>
            <SearchNormal size={16} />
          </span>
          <input type="text" placeholder="search something" className={style.input} />
        </label>
        <button className={style.iconButton}>
          <Notification size={18} />
        </button>
        <button className={style.iconButton}>
          <Bookmark size={18} />
        </button>
      </header>
    </div>
  )
}

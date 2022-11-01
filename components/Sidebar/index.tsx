import Send from 'icons/essetional/Send'
import Home from 'icons/essetional/Home'
import style from './style.module.css'
import Messages from 'icons/messages/Messages'
import Users from 'icons/users/Users'
import Bookmark from 'icons/archive/Bookmark'
import Settings from 'icons/settings/Settings'

export default function Sidebar() {
  return (
    <nav className={style.sidebar}>
      <button>
        <Send size={32} />
      </button>

      <ul className={style.options}>
        <li className={style.item}>
          <button>
            <Home size={20} />
          </button>
        </li>
        <li className={style.item}>
          <button>
            <Messages size={20} />
          </button>
        </li>
        <li className={style.item} data-hide-mobile>
          <button>
            <Users size={20} />
          </button>
        </li>
        <li className={style.item} data-hide-mobile>
          <button>
            <Bookmark size={20} />
          </button>
        </li>
        <li className={style.item}>
          <button>
            <Settings size={20} />
          </button>
        </li>
      </ul>
    </nav>
  )
}

'use client'
import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import Send from 'icons/essetional/Send'
import Home from 'icons/essetional/Home'
import style from './style.module.css'
import Messages from 'icons/messages/Messages'
import Users from 'icons/users/Users'
import Bookmark from 'icons/archive/Bookmark'
import Settings from 'icons/settings/Settings'

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className={style.sidebar}>
      <button>
        <Send size={32} />
      </button>

      <ul className={style.options}>
        <li className={style.item}>
          <NextLink href="/home" className={style.optionBtn} data-active={pathname.includes('/home')}>
            <Home size={20} />
          </NextLink>
        </li>
        <li className={style.item}>
          <button className={style.optionBtn}>
            <Messages size={20} />
          </button>
        </li>
        <li className={style.item} data-hide-mobile>
          <button className={style.optionBtn}>
            <Users size={20} />
          </button>
        </li>
        <li className={style.item} data-hide-mobile>
          <button className={style.optionBtn}>
            <Bookmark size={20} />
          </button>
        </li>
        <li className={style.item}>
          <button className={style.optionBtn}>
            <Settings size={20} />
          </button>
        </li>
      </ul>
    </nav>
  )
}

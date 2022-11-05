'use client'

import { useState, useEffect, Suspense } from 'react'

// import User from 'components/User'
import Bookmark from 'icons/archive/Bookmark'
import Notification from 'icons/notification/Notification'
import SearchNormal from 'icons/search/SearchFavorite'
import Category from 'icons/settings/Category'
import SeeAllSection from '../SeeAllSection'
import style from './accountActivity.module.css'
import CloseCircle from 'icons/essetional/CloseCircle'
import PeopleFollow from '../PeopleFollow'
import PeopleFollowLoader from '../PeopleFollow/loader'
import CardSaved from '../CardSaved'
import CardSavedLoader from '../CardSaved/loader'

export default function AccountActivity() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [open])

  const toggleOpen = () => setOpen(!open)

  return (
    <>
      <button className={style.toggleBtn} onClick={toggleOpen} data-open={open}>
        {open ? <CloseCircle /> : <Category />}
      </button>
      <section className={style.accountActivity} data-open={open}>
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

          <SeeAllSection title="People of Follow" to="#">
            <Suspense fallback={<PeopleFollowLoader />}>
              <PeopleFollow />
            </Suspense>
          </SeeAllSection>

          <SeeAllSection title="You Saved" to="#">
            <Suspense fallback={<CardSavedLoader />}>
              <CardSaved />
            </Suspense>
          </SeeAllSection>
        </div>
      </section>
    </>
  )
}

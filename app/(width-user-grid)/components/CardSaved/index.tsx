import { use } from 'react'

import { getSaved } from 'services/saved'

import style from './cardSaved.module.css'
import CardSavedError from './Error'

export default function CardSaved() {
  const saved = use(getSaved())

  if (saved instanceof Error) {
    return <CardSavedError error={{ message: 'Error getting saved, try to refresh the page' } as Error} />
  }

  return (
    <div className={style.savedGrid}>
      {saved.map(({ picture }) => (
        <button key={picture} className={style.image}>
          <img src={picture} alt="" />
        </button>
      ))}
    </div>
  )
}

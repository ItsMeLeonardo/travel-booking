import Image from 'next/image'
import { use } from 'react'

import { getSaved } from 'services/saved'

import style from './cardSaved.module.css'
import CardSavedError from './Error'

const promise = getSaved()

export default function CardSaved() {
  const saved = use(promise)

  if (saved instanceof Error) {
    return <CardSavedError error={{ message: 'Error getting saved, try to refresh the page' } as Error} />
  }

  return (
    <div className={style.savedGrid}>
      {saved.map(({ picture }) => (
        <button key={picture} className={style.image}>
          <Image width={132} height={132} src={picture} alt="" />
        </button>
      ))}
    </div>
  )
}

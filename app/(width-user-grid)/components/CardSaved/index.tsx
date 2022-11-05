import { use } from 'react'

import type { Data as Saved } from 'pages/api/saved'

import style from './cardSaved.module.css'

const getSaved = async () => {
  const response = await fetch(`http://localhost:3000/api/saved`, {
    next: {
      revalidate: 1 * 60 * 60,
    },
  })
  const saved = await response.json()
  return saved as Saved[]
}

export default function CardSaved() {
  const saved = use(getSaved())

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

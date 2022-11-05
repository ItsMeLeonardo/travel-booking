import { use } from 'react'
import User from 'components/User'

import { Data as FollowResponse } from 'pages/api/follow'

import style from './peopleFollow.module.css'

const getUserOfFollow = async () => {
  const response = await fetch(`http://localhost:3000/api/follow`, {
    next: {
      revalidate: 1 * 60 * 60,
    },
  })
  const users = await response.json()
  return users as FollowResponse[]
}
export default function PeopleFollow() {
  const users = use(getUserOfFollow())

  return (
    <>
      {users.map((user) => (
        <div className={style.profile} key={user.email}>
          <User src={user.avatar} alt={user.name} bordered name={user.username} description={user.email} />
          <button className={style.followBtn} data-followed={user.followed}>
            {user.followed ? 'Followed' : 'Follow'}
          </button>
        </div>
      ))}
    </>
  )
}

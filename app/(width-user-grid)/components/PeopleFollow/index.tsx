import { use } from 'react'
import User from 'components/User'

import { getUserOfFollow } from 'services/follow'

import style from './peopleFollow.module.css'
import PeopleFollowError from './Error'

const promise = getUserOfFollow()

export default function PeopleFollow() {
  const users = use(promise)

  if (users instanceof Error) {
    return <PeopleFollowError error={{ message: 'Error getting users, try to refresh the page' } as Error} />
  }

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

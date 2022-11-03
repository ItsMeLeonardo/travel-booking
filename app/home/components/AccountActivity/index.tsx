import User from 'components/User'
import Bookmark from 'icons/archive/Bookmark'
import Notification from 'icons/notification/Notification'
import SearchNormal from 'icons/search/SearchFavorite'
import SeeAllSection from '../SeeAllSection'
import style from './accountActivity.module.css'

const users = [
  {
    name: 'Anna Doe',
    username: 'annaDev',
    avatar: 'https://i.pinimg.com/236x/26/51/f8/2651f864dbbbffb7f3cc0521b9f5a1e0.jpg',
    email: 'anna@mail.com',
    followed: true,
  },
  {
    name: 'John Doe',
    username: 'johnDev',
    avatar: 'https://i.pinimg.com/236x/6f/87/a5/6f87a55bca4863ec49b72f323828abd0.jpg',
    email: 'jhon@mail.com',
  },
  {
    name: 'Jane Doe',
    username: 'janeDev',
    avatar: 'https://i.pinimg.com/236x/fe/74/cd/fe74cd9bb6f7bd19b8806208bd9e9eeb.jpg',
    email: 'jane@gmai.com',
  },
]

const saved = [
  {
    picture: 'https://i.pinimg.com/236x/11/dd/29/11dd29e31c4633a7fafbb1e0336a93bb.jpg',
  },
  {
    picture: 'https://i.pinimg.com/564x/90/21/ba/9021ba02649c0904b14fbf94b5a9489c.jpg',
  },
  {
    picture: 'https://i.pinimg.com/236x/d8/02/23/d802235866f2f70df3d122eec4a3f996.jpg',
  },
  {
    picture: 'https://i.pinimg.com/236x/fe/e8/f6/fee8f6c0419006f12d27ee3812cb54c1.jpg',
  },
]

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

      <SeeAllSection title="People of Follow" to="#">
        {users.map((user) => (
          <div className={style.profile} key={user.email}>
            <User src={user.avatar} alt={user.name} bordered name={user.username} description={user.email} />
            <button className={style.followBtn} data-followed={user.followed}>
              {user.followed ? 'Followed' : 'Follow'}
            </button>
          </div>
        ))}
      </SeeAllSection>

      <SeeAllSection title="You Saved" to="#">
        <div className={style.savedGrid}>
          {saved.map(({ picture }) => (
            <button key={picture} className={style.image}>
              <img src={picture} alt="" />
            </button>
          ))}
        </div>
      </SeeAllSection>
    </div>
  )
}

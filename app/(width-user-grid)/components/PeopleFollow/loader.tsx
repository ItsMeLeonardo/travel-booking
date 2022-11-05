import style from './peopleFollow.module.css'

export default function PeopleFollowLoader() {
  const items = Array.from({ length: 3 }, (_, i) => i)

  return (
    <>
      {items.map((item) => (
        <div className={style.loader} key={item}>
          {/* NOTE: move the user loader to /components/User/Loader.tsx */}
          <div className={style.user}>
            <div className={style.avatar}></div>
            <div className={style.data}>
              <div className={style.name}></div>
              <div className={style.description}></div>
            </div>
          </div>
          <div className={style.followBtn}></div>
        </div>
      ))}
    </>
  )
}

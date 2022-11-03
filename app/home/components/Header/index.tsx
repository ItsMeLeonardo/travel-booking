import HomeUser from '../User'

import style from './header.module.css'

const users = [
  { name: 'Lisa', avatar: 'https://i.pinimg.com/236x/37/55/3f/37553f29b868fed95dcb144ee5eaa5bf.jpg' },
  {
    name: 'Sonia',
    avatar: 'https://i.pinimg.com/236x/00/7b/df/007bdf11783b0ef6c058eed5261f7523.jpg',
  },
  {
    name: 'John',
    avatar: 'https://i.pinimg.com/236x/8d/b8/eb/8db8ebaa978d0c901bbf64317c96cfca.jpg',
  },
  {
    name: 'Anna',
    avatar:
      'https://images.unsplash.com/photo-1512646605205-78422b7c7896?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmVvbiUyMGdpcmx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'diego',
    avatar:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'Maria',
    avatar: 'https://i.pinimg.com/236x/60/ad/2f/60ad2fbaa11979a9e8b489de4b18b2c5.jpg',
  },
  { name: 'Lisa', avatar: 'https://i.pinimg.com/236x/37/55/3f/37553f29b868fed95dcb144ee5eaa5bf.jpg' },

  {
    name: 'John',
    avatar: 'https://i.pinimg.com/236x/8d/b8/eb/8db8ebaa978d0c901bbf64317c96cfca.jpg',
  },
  {
    name: 'Maria',
    avatar: 'https://i.pinimg.com/236x/60/ad/2f/60ad2fbaa11979a9e8b489de4b18b2c5.jpg',
  },
]

export default function HomeHeader() {
  return (
    <header className={style.header}>
      <HomeUser isOwn name="Ann Doe" avatar="https://i.pinimg.com/236x/60/ad/2f/60ad2fbaa11979a9e8b489de4b18b2c5.jpg" />

      {users.map(({ avatar, name }) => (
        <HomeUser key={name} name={name} avatar={avatar} />
      ))}

      <HomeUser seeAll name="see all" />
    </header>
  )
}

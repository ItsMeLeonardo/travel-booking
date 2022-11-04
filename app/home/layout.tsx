import { ReactNode } from 'react'

import Sidebar from 'components/Sidebar'
import AccountActivity from './components/AccountActivity'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <Sidebar />
      <main className="mainContent">{children}</main>
      <AccountActivity />
    </div>
  )
}

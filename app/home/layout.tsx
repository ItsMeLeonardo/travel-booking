import { ReactNode } from 'react'

import Sidebar from 'components/Sidebar'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="container">
      <Sidebar />
      <main className="mainContent">{children}</main>
      <section className="accountActivity">a</section>
    </div>
  )
}

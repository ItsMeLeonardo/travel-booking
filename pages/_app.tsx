import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from 'components/Sidebar'

export default function App({ Component, pageProps }: AppProps) {
  //TODO: convert this in layout
  return (
    <div className="container">
      <Sidebar />
      <main className="mainContent">
        <Component {...pageProps} />
      </main>
      <section className="accountActivity">a</section>
    </div>
  )
}

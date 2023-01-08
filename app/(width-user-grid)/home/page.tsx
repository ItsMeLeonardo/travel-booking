import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/home/feed/all')
  return null
}

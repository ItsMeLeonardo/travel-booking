import { ReactNode } from 'react'

import 'styles/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <title>Travel Booking</title>
      </head>
      <body>{children}</body>
    </html>
  )
}

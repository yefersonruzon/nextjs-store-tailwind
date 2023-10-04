import NavBar from '@/components/NavBar'
import './globals.css'
import { Poppins } from 'next/font/google'
import Footer from '@/components/Footer'

const poppins = Poppins({ subsets: ['latin'], weight: '400' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body className={`${poppins.className} relative`}>
        <NavBar />
          {children}
        <Footer />

      </body>
    </html>
  )
}

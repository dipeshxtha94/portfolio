import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './Navbar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'portfolio of Dipesh Shrestha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar />
        {children}</body>
    </html>
  )
}

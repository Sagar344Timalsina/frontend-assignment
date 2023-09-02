import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import HeaderPage from './components/partials/Header'
import FooterPage from './components/partials/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`inter.className `}><HeaderPage />{children}<FooterPage /></body>
    </html>
  )
}

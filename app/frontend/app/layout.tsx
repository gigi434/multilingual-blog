import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'

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
      <body className={inter.className}>
        <div className="px-4 py-6 border-b flex items-center justify-between">
          <h2 className="font-bold">Logo</h2>
          <ul className="flex items-center gap-3">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/company">Company</Link>
            </li>
          </ul>
        </div>
        {children}
      </body>
    </html>
  )
}

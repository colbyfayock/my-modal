import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Modal',
  description: 'Learn more at spacejelly.dev!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        { children }
        <Footer />
      </body>
    </html>
  )
}

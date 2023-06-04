import ProgressBar from '@/components/defaultLayout/progressbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'D&D Character Generator',
  description: 'A character generator for D&D 5e',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>    
      <ProgressBar />
      <div className="bg-white px-6 py-32 lg:px-8">
        {children}
      </div>
      </body>
    </html>
  )
}

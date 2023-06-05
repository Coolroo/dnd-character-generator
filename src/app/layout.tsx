import './globals.css'
import { Inter } from 'next/font/google'
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] })

const ProgressBar = dynamic(() =>
  import('@/components/defaultLayout/progressBar'), {ssr: false}
);

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

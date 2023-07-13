import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Navbar } from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YourDreamCar',
  description: "YourDreamCar is a company based in Canada. We do wrapping, window tinting and more. Do not hesitate and create the car of your dreams.",
  keywords: "Car Wrap,Car Wrap Toronto,Colour Change,Window Tinting, Tesla car Wrap",
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
          {children}
      </body>
    </html>
  )
}

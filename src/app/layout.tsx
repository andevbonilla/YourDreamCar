import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'YourDreamCar',
  description: "YourDreamCar is a company based in Canada. We do wrapping, window tinting and more. Do not hesitate and create the car of your dreams.",
  keywords: "Car Wrap,Car Wrap Toronto,Colour Change,Window Tinting, Tesla car Wrap"
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
          {/* footer section */}
          <footer className='md:px-32 md:pb-16 flex flex-col px-8 pt-12 pb-12 bg-black text-white'>
            <h2 className={`text-center font-bold text-2xl pb-12 underline decoration-[#18debe] underline-offset-8`}>Social Media</h2>
            <Footer />
          </footer>
      </body>
    </html>
  )
}

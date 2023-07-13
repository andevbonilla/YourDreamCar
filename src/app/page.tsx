import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// components imports
import { About } from '@/components/About'
import { Footer } from '@/components/Footer' 

// fonts
import { Josefin_Sans } from '@next/font/google'
import dynamic from 'next/dynamic'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

// dymanic imports
const Map = dynamic(() => import("@/components/Map"), {
    loading: () => <p>loading map...</p>,
    ssr: false
})
const Services = dynamic(() => import("@/components/Services"), {
    loading: () => <p>loading car services...</p>,
    ssr: false
})

export default function Home() {
  return (
    <main className={`${josefin.className} bg-black text-white text-opacity-85 md:text-xl`}>
      <section className="bg-image h-screen mb-16"></section>
      {/* about section */}
      <section className='md:px-32 md:pb-16 flex flex-col items-center text-center px-8 pb-12'>
          <h2 className={`font-bold text-2xl pb-12 underline decoration-wavy decoration-green-400 underline-offset-8`}>About us</h2>
          <About />
      </section>
      {/* services section */}
      <section className='md:pb-16 flex flex-col items-center text-center pb-12'>
          <h2 className={`font-bold text-2xl pb-12 underline decoration-wavy decoration-green-400 underline-offset-8`}>Services</h2>
          <Services />
      </section>
      
      {/* ubication section */}
      <section className='md:pb-16 flex flex-col items-center text-center pb-12'>
           <h2 className={`font-bold text-2xl pb-12 underline decoration-wavy decoration-green-400 underline-offset-8`}>Where find Us?</h2>
           <Map />
      </section>
      {/* footer section */}
      <footer className='md:px-32 md:pb-16 flex flex-col px-8 pb-12'>
        <h2 className={`text-center font-bold text-2xl pb-12 underline decoration-wavy decoration-green-400 underline-offset-8`}>Social Media</h2>
        <Footer />
      </footer>
    </main>
  )
}

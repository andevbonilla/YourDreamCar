import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// components imports
import { Navbar } from '@/components/Navbar'
import { About } from '@/components/About'
import { Service } from '@/components/Service'
import { TextWrapService, underlineClass } from '@/texts'
import PreMap from '@/components/Map'
import { Footer } from '@/components/Footer' 

// fonts
import { Josefin_Sans } from '@next/font/google'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <main className={`${josefin.className} bg-black text-white text-opacity-85`}>
      <section className="bg-image h-screen mb-16"></section>
      <section className='flex flex-col items-center text-center px-8 pb-8'>
          <h2 className={`font-bold text-2xl pb-6 ${underlineClass}`}>About us</h2>
          <About />
      </section>
      <section className='flex flex-col items-center text-center px-8 pb-8'>
        
           <h2 className={`font-bold text-2xl pb-6 ${underlineClass}`}>Services</h2>
           
           <Service name='Wrapping Service' desc={TextWrapService} img={'/wraping-mustang.png'} />

           <Service name='Window Tinting' desc={TextWrapService} img={'/window-tinting.png'} />

           <Service name='Paint Protection Film' desc={TextWrapService} img={'/PPF.png'} />

      </section>
      <section className='flex flex-col items-center text-center pb-8'>
           <h2 className={`font-bold text-2xl pb-6 ${underlineClass}`}>Where find Us?</h2>
           <PreMap />
      </section>
      <footer className='flex flex-col px-8 pb-8'>
        <h2 className={`text-center font-bold text-2xl pb-10 ${underlineClass}`}>Social Media</h2>
        <Footer />
      </footer>
    </main>
  )
}

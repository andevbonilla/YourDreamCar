import { Josefin_Sans } from '@next/font/google'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const HeadlightTaillightPage = () => {
  return (
    <main className={`${josefin.className} bg-black text-white text-opacity-85 md:text-xl px-[10%]`}>
      <h1 className='pb-4 pt-48 font-bold text-xl underline decoration-[#18debe] underline-offset-8'>Headlight & Taillight Tinting</h1>
      <p className='pb-4'>
         Add a touch of style and mystery to your vehicle's headlights and taillights with our tinting service. 
         Our team uses high-quality films that not only enhance the appearance but also provide protection against 
         harmful UV rays and reduce premature wear.
      </p>
      <p className='pb-4'>
         Discover how headlight and taillight tinting can dramatically change the appearance of your vehicle, 
         giving it a modern and distinctive look. In addition to enhancing aesthetics, tinting offers functional 
         benefits such as protection against UV rays that can damage internal components. Explore our tinting options 
         and learn about the impressive results we have achieved for our clients.
      </p>
    </main>
  )
}

export default HeadlightTaillightPage

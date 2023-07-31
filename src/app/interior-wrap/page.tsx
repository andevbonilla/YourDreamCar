import { Josefin_Sans } from '@next/font/google'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const InteriorWrapPage = () => {
  return (
    <main className={`${josefin.className} bg-black text-white text-opacity-85 md:text-xl px-[10%]`}>
      <h1 className='pb-4 pt-48 font-bold text-xl underline decoration-[#18debe] underline-offset-8'>INTERIOR WRAPS</h1>
      <p className='pb-4'>
         Give your car&apos;s interior a fresh new look with our Interior Wrap service. 
         From customized accents to complete color changes, we can transform your interior space with top-quality 
         materials and precise installation techniques. Whether you desire a sporty and modern atmosphere or an elegant and 
         sophisticated aesthetic, our team of experts will bring your dreams to life.
      </p>
      <p className='pb-4'>
         Discover how our Interior Wrap service can revitalize the interior of your car, 
         providing a refreshed look and a luxurious feel. 
         From carbon fiber accents to unique textures and custom designs, you&apos;ll be amazed at what we can achieve. 
         Explore our previous projects and immerse yourself in the quality and attention to detail that sets us apart.
      </p>
    </main>
  )
}

export default InteriorWrapPage
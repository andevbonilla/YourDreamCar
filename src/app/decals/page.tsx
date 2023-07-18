import { Josefin_Sans } from '@next/font/google'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const DecalsPage = () => {
  return (
    <main className={`${josefin.className} bg-black text-white text-opacity-85 md:text-xl px-[10%]`}>
      <h1 className='pb-4 pt-48 font-bold text-xl underline decoration-[#18debe] underline-offset-8'>Decals</h1>
      <p className='pb-4'>
         If you&apos;re looking to add a distinctive and personalized element to your car, 
         our decorative decals are the perfect choice. Whether you want to showcase your passion for your favorite anime character, 
         display your custom logo, racing stripes, or simply add a touch of unique style to YourDreamCar.
      </p>
      <p className='pb-4'>
         Discover how our decorative decals can make your vehicle truly unique and eye-catching. 
         From simple and elegant designs to custom graphics and bold logos, our decal options are endless. 
         Explore our gallery of previous projects and find inspiration to create a design that reflects your style and personality.
      </p>
    </main>
  )
}

export default DecalsPage
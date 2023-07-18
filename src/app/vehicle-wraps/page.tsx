import { Josefin_Sans } from '@next/font/google'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const VehicleWrapsPage = () => {
  return (
    <main className={`${josefin.className} bg-black text-white text-opacity-85 md:text-xl px-[10%]`}>
      <h1 className='pb-4 pt-48 font-bold text-xl underline decoration-[#18debe] underline-offset-8'>Vinyl Wraps</h1>
      <p className='pb-4'>
         Transform your vehicle into a true work of art as you&apos;ve always dreamed, 
         with our high-quality vinyl wraps. Our team of car wrapping experts will customize your car with a wide variety of colors, 
         textures, and designs. Whether you&apos;re looking for a sleek matte finish, 
         a sporty carbon fiber effect, or a unique and eye-catching style, we can make your automotive dreams come true!
      </p>
      <p className='pb-4'>
         When you choose our vinyl wrap service, you not only get a stunning appearance but also durable protection for your car&apos;s paint. 
         Our professional installation process ensures a perfect, bubble-free fit. 
         Discover how our customers have transformed their vehicles and taken their style to the next level with our color or 
         custom vinyl wraps.
      </p>
    </main>
  )
}

export default VehicleWrapsPage
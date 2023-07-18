import { Josefin_Sans } from '@next/font/google'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const CaliperPage = () => {
  return (
    <main className={`${josefin.className} bg-black text-white text-opacity-85 md:text-xl px-[10%]`}>
      <h1 className='pb-4 pt-48 font-bold text-xl underline decoration-[#18debe] underline-offset-8'>Caliper Painting</h1>
      <p className='pb-4'>
         If you're looking to add a touch of style and personality to your brakes, 
         our caliper painting service is the perfect choice. Our team of experts will paint your brake 
         calipers with precision and attention to detail, using vibrant and durable colors. Transform your brakes into a standout 
         feature of your vehicle and make them stand out with a customized and high-end look.
      </p>
      <p className='pb-4'>
         Discover how our caliper painting can enhance the overall appearance of your vehicle, 
         giving it a touch of style and sportiness. In addition to its aesthetic appeal, 
         caliper painting also helps protect against corrosion and wear. Explore our colors and painting techniques, 
         and find out how we can turn your brakes into a true work of art.
      </p>
    </main>
  )
}

export default CaliperPage

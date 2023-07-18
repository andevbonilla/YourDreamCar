import { Josefin_Sans } from '@next/font/google'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const BlackoutPage = () => {
  return (
    <main className={`${josefin.className} bg-black text-white text-opacity-85 md:text-xl px-[10%]`}>
      <h1 className='pb-4 pt-48 font-bold text-xl underline decoration-[#18debe] underline-offset-8'>Blackout</h1>
      <p className='pb-4'>
         If you're looking to add a touch of mystery and elegance to your vehicle, 
         our Blackout service is perfect for you. With our meticulous approach and high-quality products, 
         we will darken the chrome on your vehicle, providing you with elegance and an incredible touch. Additionally, 
         the clean and sophisticated finish of the Blackout will make your car stand out from the crowd.
      </p>
      <p className='pb-4'>
         Discover how the Blackout not only enhances the appearance of your vehicle but also offers additional benefits 
         such as reducing glare. Our team will guide you through the tint options and show you examples of our previous 
         projects so you can visualize how your car will look like.
      </p>
    </main>
  )
}

export default BlackoutPage

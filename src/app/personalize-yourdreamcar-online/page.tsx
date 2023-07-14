import { Josefin_Sans } from '@next/font/google'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const PersonalizeYourCarOnlinePage = () => {
  return (
    <main className={`${josefin.className} flex flex-col items-center md:px-32 bg-black text-white text-opacity-85 md:text-xl px-10 text-center h-full`}>
      <div className='h-screen flex justify-center items-center'>
        <h1 className='text-2xl font-bold'>Coming soon</h1>
      </div> 
    </main>
  )
}


export default PersonalizeYourCarOnlinePage;

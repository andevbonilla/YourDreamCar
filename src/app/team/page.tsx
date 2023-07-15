import Image from 'next/image'

// fonts
import { Josefin_Sans } from '@next/font/google'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const teamPage = () => {
  return (
    <main className={`${josefin.className} pt-24 flex flex-col md:px-[25%] md:text-xl bg-black text-white text-opacity-85 px-10 text-center h-full`}>
        
        <div className='flex flex-col items-center pb-8 text-start md:flex-row md:items-start max-w-3xl mt-32'>
          <Image className='pb-12 md:mr-6 md:pb-0 md:h-96'
                src={'/avendano-img.png'} 
                alt='image of David Avendano' 
                width={400} 
                height={100} />

          <div className='md:flex md:flex-col w-full md:h-96'>

            <div>
                <h3 className='pb-3 text-xl font-bold'>David Avendano</h3>
                <p className='pb-3 text-justify'>
                  CEO
                </p>
            </div>
            
            <div className='flex flex-col md:flex-row md:justify-end text-justify'>
              David Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime, sequi beatae ex, natus illo expedita fugit quasi velit quibusdam consequuntur id dicta ullam doloremque dolor laudantium? Itaque, quo labore?
            </div>

          </div>
        </div>
        
        <div className='flex flex-col items-center pb-8 text-start md:flex-row md:items-start max-w-3xl'>
          <Image className='pb-12 md:mr-6 md:pb-0 md:h-96'
                src={'/bonilla-img.JPG'} 
                alt='image of Andres Bonilla' 
                width={350} 
                height={100} />

          <div className='md:flex md:flex-col w-full md:h-96'>

            <div>
                <h3 className='pb-3 text-xl font-bold'>Andres Bonilla</h3>
                <p className='pb-3 text-justify'>
                  CTO
                </p>
            </div>
            
            <div className='flex flex-col md:flex-row md:justify-end text-justify'>
              Andres Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse maxime, sequi beatae ex, natus illo expedita fugit quasi velit quibusdam consequuntur id dicta ullam doloremque dolor laudantium? Itaque, quo labore?
            </div>

          </div>
        </div>

    </main>
  )
}

export default teamPage

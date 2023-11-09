// fonts
import { Josefin_Sans } from '@next/font/google'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const teamPage = () => {
  return (
    <main className={`${josefin.className} pt-24 flex flex-col md:px-[25%] md:text-xl bg-black text-white text-opacity-85 px-10 text-center h-full`}>
        
        <div className='flex flex-col items-center pb-8 text-start md:flex-row md:items-center md:justify-center max-w-3xl mt-24'>
          <img 
                className='md:mr-10 md:pb-0 rounded-full h-[12rem] w-[12rem]'
                src={'/avendano-img.png'} 
                alt='image of David Avendano' 
          />
          

          <div className='md:flex md:flex-col w-full'>

            <div>
                <h3 className='pt-8 pb-3 text-xl font-bold underline decoration-[#18debe] underline-offset-8'>David Avendano</h3>
                <p className='pb-3 text-justify'>
                  CEO
                </p>
                <div className='pb-4'>
                  <Link href={'https://www.instagram.com/david__avendano'} target='_blank'> 
                    <FontAwesomeIcon className='cursor-pointer text-2xl pr-4' icon={faInstagram} />
                  </Link>
                  <Link href={'https://www.instagram.com/david__avendano'} target='_blank'> 
                    <FontAwesomeIcon className='cursor-pointer text-2xl pr-4' icon={faLinkedin} />
                  </Link>
                  <Link href={'https://www.instagram.com/david__avendano'} target='_blank'> 
                    <FontAwesomeIcon className='cursor-pointer text-2xl pr-4' icon={faTwitter} />
                  </Link>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:justify-end text-justify text-base'>
              Hello, I&apos;m David, the general director of YourDreamCar. I have a lot of experience in car tuning and I will take care of your #yourdreamcar
            </div>

          </div>
        </div>

        <div className='flex flex-col items-center pb-8 text-start md:flex-row md:items-center md:justify-center max-w-3xl mt-8'>
          <img 
                className='md:mr-10 md:pb-0 rounded-full h-[12rem] w-[12rem]'
                src={'/bonilla-img.JPG'} 
                alt='image of Andres Bonilla' 
          />

          <div className='md:flex md:flex-col w-full'>

            <div>
                <h3 className='pt-8 pb-3 text-xl font-bold underline decoration-[#18debe] underline-offset-8'>Andres Bonilla</h3>
                <p className='pb-3 text-justify'>
                  CTO
                </p>
                <div className='pb-4'>
                  <Link href={'https://www.instagram.com/__andrec__/'} target='_blank'> 
                    <FontAwesomeIcon className='cursor-pointer text-2xl pr-4' icon={faInstagram} />
                  </Link>
                  <Link href={'https://www.linkedin.com/in/andres-bonilla-685983189/'} target='_blank'> 
                    <FontAwesomeIcon className='cursor-pointer text-2xl pr-4' icon={faLinkedin} />
                  </Link>
                  <Link href={'https://twitter.com/AndresB64566284'} target='_blank'> 
                    <FontAwesomeIcon className='cursor-pointer text-2xl pr-4' icon={faTwitter} />
                  </Link>
                </div>
            </div>

            <div className='flex flex-col md:flex-row md:justify-end text-justify text-base'>
              Hello, I&apos;m Andres, the technology director. I love technology and cars, don&apos;t hesitate to turn your car into #yourdreamcar
            </div>

          </div>
        </div>

    </main>
  )
}

export default teamPage

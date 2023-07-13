import { faClock } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  title: string,
  date: string,
  img: string,
  link: string
}

export const BlogArticle = ({title, date, img, link}: Props) => {
  return (
    <div className='flex flex-col items-center pb-8 text-start md:flex-row md:items-start max-w-3xl'>
        <Image className='pb-12 md:mr-6 md:pb-0 md:h-96'
               src={img} 
               alt='image of the service' 
               width={400} 
               height={200} />

        <div className='md:flex md:flex-col md:justify-between w-full md:h-96'>

          <div>
              <h3 className='pb-3 text-xl font-bold'>{title}</h3>
              <p className='pb-3 text-justify'>
                 <FontAwesomeIcon icon={faClock} /> {date}
              </p>
          </div>
          
          <div className='flex flex-col md:flex-row md:justify-end'>
            <Link href={link} 
                  className='md:mt-0 mt-3 bg-transparent text-green-400 border-green-400 px-4 py-3 border-solid border-2 md:mr-4'>
                  Read more
            </Link>
          </div>

        </div>
    </div>
  )
}

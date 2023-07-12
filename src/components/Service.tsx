import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface Props {
  name: string,
  desc: string,
  img: string
}

export const Service = ({name, desc, img}: Props) => {
  return (
    <div className='flex flex-col justify-between items-center pb-8 text-start md:flex-row md:items-start'>
        <Image className='pb-12 md:mr-6 md:pb-0 h-96'
               src={img} 
               alt='image of the service' 
               width={400} 
               height={300} />

        <div className='md:flex md:flex-col md:justify-between h-96'>

          <div>
              <h3 className='pb-3 text-xl font-bold'>{name}</h3>
              <p className='pb-3 text-justify'>
                 {desc}
              </p>
          </div>
          
          <div className='flex flex-col md:flex-row md:justify-end'>
            <Link href={`/${name.replace(' ', '-').toLowerCase()}`} 
                  className='md:mt-0 mt-3 bg-transparent text-green-400 border-green-400 px-4 py-3 border-solid border-2 md:mr-4'>
                  Read more
            </Link>
            <button className='md:mt-0 mt-3 bg-green-400 text-white border-none px-4 py-3'>Schedule your service</button>
          </div>

        </div>
    </div>
  )
}

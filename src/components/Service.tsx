import Image from 'next/image'
import React from 'react'

interface Props {
  name: string,
  desc: string,
  img: string
}

export const Service = ({name, desc, img}: Props) => {
  return (
    <div className='flex flex-col justify-between pb-6 text-start'>
        <Image className='pb-4' src={img} alt='image of the service' width={400} height={300} />
        <div>
          <h3 className='pb-3 text-xl font-bold'>{name}</h3>
          <p className='pb-3 text-justify'>
            {desc}
          </p>
          <div className='flex flex-col'>
            <button className='mt-3 bg-transparent text-green-400 border-green-400 px-4 py-3 border-solid border-2'>Read more</button>
            <button className='mt-3 bg-green-400 text-white border-none px-4 py-3'>Schedule your service</button>
          </div>
        </div>
    </div>
  )
}

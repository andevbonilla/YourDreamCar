"use client"
import { useEffect, useState } from 'react'

interface Props {
  active: boolean,
  name: string,
  desc: string,
  img: string
}

const Service = ({active, name, desc, img}: Props) => {

  const [gradient, setGradient] = useState('linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))')

  useEffect(() => {
    if (active) {
      setGradient('linear-gradient(rgba(0, 0, 0, 0.8), #18debe)')
    }else{
      setGradient('linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))')
    }
  }, [active])
  

  return (
    <div 
         className='h-80 w-full text-start p-6'   
         style={{backgroundImage: `${gradient}, url("${img}")`, 
                 backgroundRepeat: 'no-repeat', 
                 backgroundSize: 'cover', 
                 backgroundPosition: 'center' }}
    >
      <h3 className='text-2xl font-bold pb-4'>{name}</h3>
      {
        active && (
          <div className='fade-in-animation'>
            <p className='pb-4'>{desc}</p>
            <button className='text-base font-bold border border-white px-2 py-1'>Get a Quote</button>
          </div>
        )
      }
    </div>
  )
}

export default Service;



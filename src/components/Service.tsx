"use client"
import { useRef, useState } from 'react'

interface Props {
  name: string,
  desc: string,
  img: string
}

const Service = ({name, desc, img}: Props) => {

  const serviceContainer:any = useRef(null)

  const [isActive, setIsActive] = useState(false);
  const [gradient, setGradient] = useState('linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))')

  const showMoreInfo = () => {
    setIsActive(!isActive)
    if (isActive) {
      setGradient('linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3))')
    }else{
      setGradient('linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 256, 0, 0.3))')
    }
    
  }

  return (
    <div ref={serviceContainer}
         onClick={showMoreInfo}
         className='h-80 w-full text-start p-6'   
         style={{backgroundImage: `${gradient}, url("${img}")`, 
                 backgroundRepeat: 'no-repeat', 
                 backgroundSize: 'cover', 
                 backgroundPosition: 'center' }}
    >
      <h3 className='text-2xl font-bold pb-4'>{name}</h3>
      {
        isActive && (
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

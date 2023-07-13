"use client"
import React, { useEffect, useState } from 'react'
import { MinTextWrapService } from '@/texts'
import dynamic from 'next/dynamic'

const Service = dynamic(() => import("@/components/Service"), {
    loading: () => <p>loading service...</p>,
    ssr: false
})

const Services = () => {

  const [whichActive, setWhichActive] = useState("");
  useEffect(() => {
    console.log(whichActive)
  }, [whichActive])
  

  const showMoreInfo = (name:string) => {   
    setWhichActive(name)
  }
  

  return (
    <div className='md:flex w-full'>

           <div className='w-full cursor-pointer' onClick={() => showMoreInfo('Wrapping Service')}>
              <Service active={(whichActive === 'Wrapping Service')} name='Wrapping Service' desc={MinTextWrapService} img={'wrapping-service-img-min.png'} />
           </div>

           <div className='w-full cursor-pointer' onClick={() => showMoreInfo('Window Tinting')}> 
              <Service active={(whichActive === 'Window Tinting')} name='Window Tinting' desc={MinTextWrapService} img={'window-tinting-min.png'} />
           </div>

           <div className='w-full cursor-pointer' onClick={() => showMoreInfo('Paint Protection Film')}>
              <Service active={(whichActive === 'Paint Protection Film')} name='Paint Protection Film' desc={MinTextWrapService} img={'PPF-min.png'} />
           </div>
           
    </div>
  )
}

export default Services
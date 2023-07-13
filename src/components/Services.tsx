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
    <section className='md:pb-16 flex flex-col items-center text-center pb-12'>
      
           <h2 className={`font-bold text-2xl pb-12 underline decoration-wavy decoration-green-400 underline-offset-8`}>Services</h2>

           <div className='w-full' onClick={() => showMoreInfo('Wrapping Service')}>
              <Service active={(whichActive === 'Wrapping Service')} name='Wrapping Service' desc={MinTextWrapService} img={'wrapping-service-img-min.png'} />
           </div>

           <div className='w-full' onClick={() => showMoreInfo('Window Tinting')}> 
              <Service active={(whichActive === 'Window Tinting')} name='Window Tinting' desc={MinTextWrapService} img={'window-tinting-min.png'} />
           </div>

           <div className='w-full' onClick={() => showMoreInfo('Paint Protection Film')}>
              <Service active={(whichActive === 'Paint Protection Film')} name='Paint Protection Film' desc={MinTextWrapService} img={'PPF-min.png'} />
           </div>
           
    </section>
  )
}

export default Services
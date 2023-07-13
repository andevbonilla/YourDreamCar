"use client"
import React, { useEffect, useState } from 'react'
import { MinTextWrapService } from '@/texts'
import Service from './Service';

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

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('Wrapping Service')}
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('Wrapping Service')}>
              <Service active={(whichActive === 'Wrapping Service')} name='Wrapping Service' desc={MinTextWrapService} img={'wrapping-service-img-min.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('Window Tinting')}
                                                  onMouseLeave={() => showMoreInfo('')}  
                                                  onClick={() => showMoreInfo('Window Tinting')}> 
              <Service active={(whichActive === 'Window Tinting')} name='Window Tinting' desc={MinTextWrapService} img={'window-tinting-min.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('Paint Protection Film')} 
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('Paint Protection Film')}>
              <Service active={(whichActive === 'Paint Protection Film')} name='Paint Protection Film' desc={MinTextWrapService} img={'PPF-min.png'} />
           </div>
           
    </div>
  )
}

export default Services
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
    <div className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 w-full'>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('Vehicle Wraps')}
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('Vehicle Wraps')}>
              <Service active={(whichActive === 'Vehicle Wraps')} name='Vehicle Wraps' desc={MinTextWrapService} img={'wrapping-service-img-min.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('Blackout')}
                                                  onMouseLeave={() => showMoreInfo('')}  
                                                  onClick={() => showMoreInfo('Blackout')}> 
              <Service active={(whichActive === 'Blackout')} name='Blackout' desc={MinTextWrapService} img={'window-tinting-min.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('Interior Wrap')} 
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('Interior Wrap')}>
              <Service active={(whichActive === 'Interior Wrap')} name='Interior Wrap' desc={MinTextWrapService} img={'PPF-min.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('Headlight & Taillight')} 
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('Headlight & Taillight')}>
              <Service active={(whichActive === 'Headlight & Taillight')} name='Headlight & Taillight' desc={MinTextWrapService} img={'PPF-min.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('Caliper Paint')} 
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('Caliper Paint')}>
              <Service active={(whichActive === 'Caliper Paint')} name='Caliper Paint' desc={MinTextWrapService} img={'PPF-min.png'} />
           </div>
           
    </div>
  )
}

export default Services
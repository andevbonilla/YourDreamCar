"use client"
import React, { useState } from 'react'
import { MinTextBlackoutService, MinTextWrapService } from '@/texts'
import Service from './Service';

const Services = () => {

  const [whichActive, setWhichActive] = useState("");

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
              <Service active={(whichActive === 'Blackout')} name='Blackout' desc={MinTextBlackoutService} img={'window-tinting-min.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('Interior Wrap')} 
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('Interior Wrap')}>
              <Service active={(whichActive === 'Interior Wrap')} name='Interior Wrap' desc={MinTextWrapService} img={'interior-wrap-tesla.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('Headlight & Taillight')} 
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('Headlight & Taillight')}>
              <Service active={(whichActive === 'Headlight & Taillight')} name='Headlight & Taillight' desc={MinTextWrapService} img={'headlight-taillight.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('Caliper Paint')} 
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('Caliper Paint')}>
              <Service active={(whichActive === 'Caliper Paint')} name='Caliper Paint' desc={MinTextWrapService} img={'caliper-blue.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('Decals')} 
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('Decals')}>
              <Service active={(whichActive === 'Decals')} name='Decals' desc={MinTextWrapService} img={'decal-img.png'} />
           </div>
           
    </div>
  )
}

export default Services
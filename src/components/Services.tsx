"use client"
import React, { useState } from 'react'
import { MinTextBlackoutService, MinTextCaliperService, MinTextDecalsService, MinTextInteriorWrapService, MinTextTailightService, MinTextWrapService } from '@/texts'
import Service from './Service';

const Services = () => {

  const [whichActive, setWhichActive] = useState("");

  const showMoreInfo = (name:string) => {   
    setWhichActive(name)
  }
  

  return (
    <div className='md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 w-full'>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('VEHICLE WRAPS')}
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('VEHICLE WRAPS')}>
              <Service active={(whichActive === 'VEHICLE WRAPS')} name='VEHICLE WRAPS' desc={MinTextWrapService} img={'wrapping-service-img-min.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('BLACKOUT')}
                                                  onMouseLeave={() => showMoreInfo('')}  
                                                  onClick={() => showMoreInfo('BLACKOUT')}> 
              <Service active={(whichActive === 'BLACKOUT')} name='BLACKOUT' desc={MinTextBlackoutService} img={'window-tinting-min.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('INTERIOR WRAP')} 
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('INTERIOR WRAP')}>
              <Service active={(whichActive === 'INTERIOR WRAP')} name='INTERIOR WRAP' desc={MinTextInteriorWrapService} img={'interior-wrap-tesla.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('HEADLIGHT & TAILLIGHT')} 
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('HEADLIGHT & TAILLIGHT')}>
              <Service active={(whichActive === 'HEADLIGHT & TAILLIGHT')} name='HEADLIGHT & TAILLIGHT' desc={MinTextTailightService} img={'headlight-taillight.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('CALIPER PAINT')} 
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('CALIPER PAINT')}>
              <Service active={(whichActive === 'CALIPER PAINT')} name='CALIPER PAINT' desc={MinTextCaliperService} img={'caliper-blue.png'} />
           </div>

           <div className='w-full cursor-pointer' onMouseEnter={() => showMoreInfo('DECALS')} 
                                                  onMouseLeave={() => showMoreInfo('')} 
                                                  onClick={() => showMoreInfo('DECALS')}>
              <Service active={(whichActive === 'DECALS')} name='DECALS' desc={MinTextDecalsService} img={'decal-img.png'} />
           </div>
           
    </div>
  )
}

export default Services
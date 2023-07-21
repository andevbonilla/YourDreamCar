import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faWhatsapp, faTiktok} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'


export const Footer = () => {
  return (
    <>
      <div className='flex justify-center md:text-3xl text-xl font-bold pb-12'>
        <h3>contact@yourdreamcar.ca</h3>
      </div>
      <div className='flex justify-center mx-10 md:flex-row md:mb-10'>
        <a className='cursor-pointer mr-10'
           href='https://www.instagram.com/yourdreamcar.ca/' 
           target='_blank' 
           rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} size='2x' color='white'/>
        </a>
        <a className='cursor-pointer mr-10' 
           href='https://www.facebook.com/people/Yourdreamcar/100094399190794/?mibextid=LQQJ4d' 
           target='_blank' 
           rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size='2x' color='white'/>
        </a>
        <a className='cursor-pointer mr-10' 
           href='https://www.instagram.com/yourdreamcar.ca/' 
           target='_blank' 
           rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} size='2x' color='white'/>
        </a>
        <a className='cursor-pointer' 
           href='https://www.tiktok.com/@yourdreamcar.ca/' 
           target='_blank' 
           rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTiktok} size='2x' color='white'/>
        </a>
      </div>
      <div className='flex flex-col justify-start mt-8 md:flex-row'>
        <div className='flex flex-col mb-3 md:mr-14'>
          <h4 className='font-bold mb-3 text-lg'>SERVICES</h4>
          <Link className='mb-3' href={'/decals'}>Decals</Link>
          <Link className='mb-3' href={'/blackout'}>Blackout</Link>
          <Link className='mb-3' href={'/vehicle-wraps'}>Vehicle Wraps</Link>
          <Link className='mb-3' href={'/interior-wrap'}>Interior Wrap</Link>
          <Link className='mb-3' href={'/caliper-paint'}>Caliper Paint</Link>
          <Link className='mb-3' href={'/headlight-taillight'}>Headlight & Taillight</Link>
        </div>
        <div className='flex flex-col mb-3 md:mr-14'>
          <h4 className='font-bold mb-3 text-lg'>ENTERPRISE</h4>
          <Link className='mb-3' href={'/team'}>Team</Link>
          <Link className='mb-3' href={''}>Jobs</Link>
          <Link className='mb-3' href={'/blog'}>Blog</Link>
        </div>
        <div className='flex flex-col mb-3 md:mr-14'>
          <h4 className='font-bold mb-3 text-lg'>INFORMATION</h4>
          <Link className='mb-3' href={''}>FAQs</Link>
          <Link className='mb-3' href={''}>Contact</Link>
          <Link className='mb-3' href={'/blog'}>Privacy</Link>
        </div>
      </div>
      <p className='text-center mt-4'>© YourDreamCar 2023</p>
    </>
  )
}

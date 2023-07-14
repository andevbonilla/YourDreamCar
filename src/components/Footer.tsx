import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faWhatsapp, faTiktok} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'


export const Footer = () => {
  return (
    <>
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
        <div className='flex flex-col mb-3 md:mr-10'>
          <h4 className='font-bold'>Services</h4>
          <Link href={''}>Wrapping Service</Link>
          <Link href={''}>Window Tinting</Link>
          <Link href={''}>Paint Protection Film - PPF</Link>
        </div>
        <div className='flex flex-col mb-3 md:mr-10'>
          <h4 className='font-bold'>Enterprise</h4>
          <Link href={'/team'}>Team</Link>
          <Link href={''}>Jobs</Link>
          <Link href={'/blog'}>Blog</Link>
        </div>
        <div className='flex flex-col mb-3 md:mr-10'>
          <h4 className='font-bold'>Information</h4>
          <Link href={''}>FAQs</Link>
          <Link href={''}>Contact</Link>
          <Link href={'/blog'}>Privacy</Link>
        </div>
      </div>
      <p className='text-center mt-4'>© YourDreamCar 2023</p>
    </>
  )
}

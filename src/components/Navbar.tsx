"use client"
import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export const Navbar = () => {

  const imgBugatti:any = useRef(null);
  const [bugattiWidth, setbugattiWidth] = useState('w-12')
  const [bugattiHeight, setbugattiHeight] = useState('h-12')

  const openMenu = () => {
    imgBugatti.current.className = 'change-opacity'
    setTimeout(() => {
      imgBugatti.current.className = 'zoom-one'
    }, 500);  
    setTimeout(() => {
      imgBugatti.current.className = 'zoom-two'
    }, 1500);  
  }

  return (
    <div className='fixed w-full h-full bg-black'>
      <div className='flex z-10 justify-between items-center p-8 bg-gradient-to-b from-black to-transparent w-full'>
          <h1 className='text-2xl font-bold text-white'>YourDreamCar</h1>
          <FontAwesomeIcon onClick={openMenu} icon={faBarsStaggered} size='2x' color='white'/>
      </div>
      <div className='h-full relative'>
            <img className={'img-bugatti'}
                 src='/bugatti-divo-removebg-preview.png' 
                 alt='bugatti image'
                 ref={imgBugatti}
            />
      </div>
    </div>
  )
}

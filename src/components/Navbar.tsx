"use client"
import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export const Navbar = () => {

  const [menuState, setMenuState] = useState(false)
  const imgBugatti:any = useRef(null);
  const menuOpened:any = useRef(null);
  const navbar:any = useRef(null);

  const openMenu = () => {
    if (menuState === true) {
      return;
    }
    imgBugatti.current.className = 'change-opacity'
    setMenuState(true)
    setTimeout(() => {
      imgBugatti.current.className = 'zoom-one'
    }, 500);  
    setTimeout(() => {
      imgBugatti.current.className = 'zoom-two'
      setTimeout(() => {
        menuOpened.current.className = 'menu-opened'
        imgBugatti.current.className = 'default-opacity'
        navbar.current.className = 'hidden z-10 justify-between items-center p-8 bg-gradient-to-b from-black to-transparent w-full'
      }, 1001);     
    }, 1500);  
  }

  const closeMenu = () => {
        setMenuState(false)
        menuOpened.current.className = 'menu-not-opened'
        imgBugatti.current.className = 'img-bugatti'
        navbar.current.className = 'flex z-10 justify-between items-center p-8 bg-gradient-to-b from-black to-transparent w-full'
  }

  return (
    <div className='fixed w-full h-full z-40'>
      <div ref={navbar} className='flex z-10 justify-between items-center p-8 bg-gradient-to-b from-black to-transparent w-full'>
          <h1 className='text-2xl font-bold text-white'>YourDreamCar</h1>
          <FontAwesomeIcon onClick={openMenu} icon={faBarsStaggered} size='2x' color='white'/>
      </div>
      <div className='h-full relative'>
            <img className={'img-bugatti'}
                 src='/bugatti-divo-removebg-preview.png' 
                 alt='bugatti image'
                 ref={imgBugatti}
            />
            <div ref={menuOpened} className='menu-not-opened'>
              <FontAwesomeIcon onClick={closeMenu} icon={faXmark} size='2x' color='white'/>
              <Link href={''}>Home</Link>
              <Link href={''}>Blog</Link>
              <Link href={''}>Online Personalization</Link>
            </div>
      </div>
    </div>
  )
}

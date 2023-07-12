"use client"
import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import { underlineClass } from '@/texts'

export const Navbar = () => {

  const [bugattiAnimation, setBugattiAnimation] = useState(false)
  const [navMenu, setNavMenu] = useState(false)

  const bugattiImg:any = useRef(null)


  const openMenu = () => {
    if (bugattiAnimation) return;
    setBugattiAnimation(true);
    setTimeout(() => {
      bugattiImg.current.className = 'zoom-one'
      setTimeout(() => {
        bugattiImg.current.className = 'zoom-two'
        setTimeout(() => {
          setNavMenu(true)
          setBugattiAnimation(false);
          bugattiImg.current.className = 'img-bugatti';
        }, 801);
      }, 1000);
    }, 200);
  }

  const closeMenu = () => {
        setNavMenu(false)
  }

  return (
    <>
      
      {(!bugattiAnimation && !navMenu) && 
                            <nav className='fixed w-full z-40'>
                                <div className='flex z-10 justify-between items-center p-8 bg-gradient-to-b from-black to-transparent w-full'>
                                       <h1 className='text-2xl font-bold text-white'>YourDreamCar</h1>
                                       <FontAwesomeIcon onClick={openMenu} icon={faBarsStaggered} size='2x' color='white'/>
                                </div>
                            </nav>
                            
      }
      {
        bugattiAnimation && <div className='fixed h-full w-full z-40'>
                               <img className={'img-bugatti'}
                                    src='/bugatti-divo-min.png' 
                                    alt='bugatti image'
                                    ref={bugattiImg}
                                />
                            </div>
      }
      {
        navMenu && <div className='fixed h-full w-full bg-black flex justify-center items-center z-40'>
                        <div className='flex flex-col text-center'>
                          <FontAwesomeIcon className='pb-4' onClick={closeMenu} icon={faXmark} size='2x' color='white'/>
                          <Link onClick={closeMenu} 
                                className={`text-white pb-4 font-bold text-xl ${underlineClass}`} 
                                href={'/'}>
                                Home
                          </Link>
                          <Link onClick={closeMenu} 
                                className={`text-white pb-4 font-bold text-xl ${underlineClass}`} 
                                href={'/blog'}>
                                Blog
                          </Link>
                          <Link onClick={closeMenu} 
                                className={`text-white pb-4 font-bold text-xl ${underlineClass}`} 
                                href={'/personalize-yourdreamcar'}>
                                Online Personalization
                          </Link>
                        </div>
                   </div>
      }
       
    </>
  )
}

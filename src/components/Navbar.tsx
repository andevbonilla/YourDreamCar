import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-8 bg-gradient-to-b from-black to-transparent fixed w-full'>
        <h1 className='text-2xl font-bold text-white'>YourDreamCar</h1>
        <FontAwesomeIcon icon={faBarsStaggered} size='2x' color='white'/>
    </div>
  )
}

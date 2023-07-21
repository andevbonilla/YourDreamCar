"use client"
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'

export const PopupEventos = () => {

    const [form, setForm] = useState(false)
    const [presentation, setPresentation] = useState(true)

    const applyDiscount = () => {
        setPresentation(false)
        setForm(true)
    }

    const closePopup = () => {
        setPresentation(false)
    }

    const closeForm = () => {
        setForm(false)
    }


  return (
    <>  
        {
            presentation && <div className='w-full h-screen fixed top-0 left-0 flex justify-center items-center text-center bg-black bg-opacity-70 z-40 text-base'>
                                <div className='flex flex-col justify-center items-center sm:w-[65%] md:w-[65%] lg:w-[45%] w-[90%] fixed bg-black z-40 p-12'>
                                    <div className='flex'>
                                        <FontAwesomeIcon onClick={closePopup} className='text-3xl cursor-pointer' icon={faCircleXmark} />
                                    </div>
                                    <Image
                                        src={"/event-img.jpg"}
                                        width={600}
                                        height={600}
                                        alt='event img'
                                    />
                                    <h2 className='text-2xl'>Get 30% of discount. Only for today!</h2>
                                    <button className='bg-[#18debe] py-2 px-4 mt-8' onClick={applyDiscount}>Get discount</button>
                                </div>
                            </div>
        }
        {form && <div className='w-full h-screen fixed top-0 left-0 flex justify-center text-center bg-black bg-opacity-70 z-40 pt-10 text-base'>
                    <form action="https://formsubmit.co/contact@yourdreamcar.ca" 
                          method="POST"
                          className='sm:w-[50%] md:w-[50%] lg:w-[30%] w-[90%] h-full fixed bg-black z-40 p-8 overflow-y-scroll'>

                        <div className='flex justify-end'>
                          <FontAwesomeIcon onClick={closeForm} className='text-3xl' icon={faCircleXmark} />
                        </div>

                        <div className='text-xl pb-6'>
                          <h3 className='underline decoration-[#18debe] underline-offset-8'>Race Wars Toronto</h3>
                        </div>

                        <input name='name' className='w-full p-2 mb-4 text-black' type='text' placeholder='First Name*'/>
                        <input name='lastname' className='w-full p-2 mb-4 text-black' type='text' placeholder='Last Name*'/>
                        <input name='email' className='w-full p-2 mb-4 text-black' type='email' placeholder='Email Address*'/>
                        <input name='phone' className='w-full p-2 mb-4 text-black' type='phone' placeholder='Phone Number*'/>

                        <input name='carmake' className='w-full px-2 py-2 mb-4 text-black' type='text' placeholder='Car Make*'/>
                        <input name='carmodel' className='w-full px-2 py-2 mb-4 text-black' type='text' placeholder='Car Model*'/>
                        <input name='carmade' className='w-full px-2 py-2 mb-4 text-black' type='text' placeholder='Year Made*'/>

                        <h4 className='pb-4'>The best way of contact you</h4>
                        <div className='flex mb-4'>
                            <input className='mx-3 mb-1 text-black' type='checkbox'/>Email
                            <input className='mx-3 mb-1 text-black' type='checkbox'/>Call
                            <input className='mx-3 mb-1 text-black' type='checkbox'/>Message
                        </div>
                        <textarea name='details' className='w-full h-24 p-2 text-black mb-4' placeholder='Message' />

                        <button className='bg-[#18debe] text-white px-4 py-1 mb-8'>Submit</button>
                    </form>
        </div>
        }
    </>
    
  )
}

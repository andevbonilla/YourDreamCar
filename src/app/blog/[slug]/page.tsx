import React from 'react'
import { blogdb } from "@/interfaces/blogdb.interface";

// fonts
import { Josefin_Sans } from '@next/font/google'
import { blogsdb } from '@/blogsdb';
import Image from 'next/image';
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const page = ({ params }: { params: { slug: string } }) => {

  const blogInfo = blogsdb.find((blog)=>blog.id === params.slug);

  return (
     <main className={`${josefin.className} md:px-[10%] bg-black text-white text-opacity-85 md:text-xl px-8 text-justify`}>
        <article className='flex flex-col items-center pt-24'>
              <header>
                  <h1 className='text-2xl font-bold pt-24 pb-8'>{blogInfo?.title}</h1>
              </header>
              <h3 className='pb-2 font-bold text-xl'>Introduction:</h3> 
              <p className='pb-6'>{blogInfo?.intro}</p>
              <Image
                  className='pb-6' 
                  src={`${blogInfo?.images[0]}`}
                  width={400}
                  height={300}
                  alt={`image of ${blogInfo?.shortTitle}`}
              />
              <h3 className='pb-2 font-bold text-xl'>{blogInfo?.middleTitle}:</h3> 
              <p className='pb-6'>{blogInfo?.middleContent}</p>
              <Image
                  className='pb-6'  
                  src={`${blogInfo?.images[1]}`}
                  width={400}
                  height={300}
                  alt={`image of ${blogInfo?.shortTitle}`}
              />
              <h3 className='pb-2 font-bold text-xl'>Conclusion:</h3> 
              <p className='pb-6'>{blogInfo?.conclusion}</p>     
        </article>
      </main>
  )

}

export default page

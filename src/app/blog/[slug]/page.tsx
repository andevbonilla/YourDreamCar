import { ArticleUnveilingTheArtOfWrapping, ArticleWrappingSuperiorToPaint } from '@/texts';
import React from 'react'

// fonts
import { Josefin_Sans } from '@next/font/google'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const page = ({ params }: { params: { slug: string } }) => {

  let ArticleTitle = ''
  let ArticleText = ''

  if (params.slug === 'advantages-of-wraps') {
    ArticleText = ArticleWrappingSuperiorToPaint
    ArticleTitle = 'Advantages of Wraps: Why Wrapping is Superior to Paint'
  }else if(params.slug === 'unveiling-the-art-of-wrapping'){
    ArticleText = ArticleUnveilingTheArtOfWrapping
    ArticleTitle = 'Unveiling the Art of Wrapping: Elevating Your Gift-Giving Experience'
  }

  console.log(params);
  return (
    <main className={`${josefin.className} bg-black text-white text-opacity-85`}>
      <h1 className='md:px-32 px-8 pt-24 pb-6 text-xl font-bold'>{ArticleTitle}</h1>
      <p className='md:px-32 px-8 pb-8 text-justify'>
        {ArticleText}
      </p>
    </main>
  )
}

export default page

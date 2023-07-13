import { BlogArticle } from '@/components/BlogArticle'

// fonts
import { Josefin_Sans } from '@next/font/google'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const BlogHome = () => {
  return (
    <main className={`${josefin.className} flex flex-col items-center md:px-32 bg-black text-white text-opacity-85 md:text-xl px-10 text-center h-full`}>
      
      <h2 className='pt-28 pb-8 text-xl font-bold'>Lastest Posts</h2>

      <BlogArticle title='Unveiling the Art of Wrapping: Elevating Your Gift-Giving Experience' 
                   img='/wrapping-service-img-min.png' 
                   date='7/12/2023' 
                   link='/blog/unveiling-the-art-of-wrapping' 
       />

      <BlogArticle title='Advantages of Wraps: Why Wrapping is Superior to Paint' 
                   img='/paintig-vs-wrap-min.png' 
                   date='7/12/2023' 
                   link='/blog/advantages-of-wraps' 
       />

    </main>
  )
}

export default BlogHome

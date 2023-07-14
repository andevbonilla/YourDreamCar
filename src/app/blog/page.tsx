import { BlogArticle } from '@/components/BlogArticle'

// fonts
import { Josefin_Sans } from '@next/font/google'
const josefin = Josefin_Sans({ subsets: ['latin'], weight: '400' })

const BlogHome = () => {
  return (
    <main className={`${josefin.className} flex flex-col items-center md:px-32 bg-black text-white text-opacity-85 md:text-xl px-10 text-center h-full`}>
      
      <h2 className='pt-28 pb-8 text-xl font-bold'>Lastest Posts</h2>

      <BlogArticle title='Top Car Wrap Trends' 
                   img='/bmw-wrapped-min.png' 
                   date='14/07/2023' 
                   link='/blog/top-car-wrap-trends' 
       />

      <BlogArticle title='Advantages of Wraps: Why Wrapping is Superior to Paint' 
                   img='/paintig-vs-wrap-min.png' 
                   date='12/07/2023' 
                   link='/blog/advantages-of-wraps' 
       />

    </main>
  )
}

export default BlogHome

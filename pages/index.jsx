import {client} from '../lib/client'

const Home = ( { tiktokHighlights } ) => {
  return (
    <div className='flex flex-col max-w-[1400px]'>
      {/* Hero */}
      <div className='flex min-h-screen m-auto'>
        <div className='m-auto'>
          <h1 className='text-8xl text-[#918fe6] font-["Groovin"]'>Brooke Cordelia Harvey</h1>
          <div className='flex justify-center gap-4 mt-6 text-2xl'>
            <h2>Content Creator</h2>
            <span>•</span>
            <h2>Stylist</h2>
            <span>•</span>
            <h2>Roller Skater</h2>
            <span>•</span>
            <h2>Aesthetics Curator</h2>
          </div>
          <div className='h-14 w-28 flex gap-4 m-auto my-4'>
            <a className='w-1/2' href=""><img src="/images/tiktok.svg" alt="tik tok logo link" /></a>
            <a className='w-1/2' href=""><img src="/images/insta.svg" alt="insta logo link" /></a>
          </div>
        </div>
      </div>
      {/* About */}
      <div className='flex max-w-[1000px] mx-auto flex-col min-h-screen'>
        <h1 className='flex mx-auto text-4xl'>About Me</h1>
        <div className='flex flex-col p-4'>
          <div className=' w-full px-10'>
            <img className='w-[100px] rounded-lg float-left pr-4' src="/images/cordelia-headshot.jpg" alt="" />
            <p>I have been working in the fashion industry for 4 years, starting off as a visual merchandiser at Forever 21 and working my way to becoming a social media associate for Dolls Kill specializing in making video content and Pinterest boards.

            I have been pursing artistic skating for 5 years with high marks in performance and personality. I have skated for entertainment purposes with Netflix & advertised skates for various skate brands like Sugar Thrillz, C7 skates, and Impala. Skating & fashion are two mediums I use to express myself & I am incredibly lucky to have success in both.</p>
          </div>
          <div className='justify-evenly  flex w-full my-4'>
            <div className='w-1/3 px-5 bg-[#ddd3ff] '>
              <h2 className='mb-2 text-2xl text-center'>Aesthetics</h2>
              <p>Using knowledge of different aesthetics to make products look appealing to a wide audience. Whatever your brand is, I got you! I have been an avid Pinterest and tumblr user for 10 years and know exactly how to curate a vision no matter what you’re customers vibe is.</p>
            </div>
            <div className='w-1/3 px-5 border-[1px] border-gray-600'>
              <h2 className='mb-2 text-2xl text-center'>Product Focused</h2>
              <p>This is not about me wanting free clothes or a tag on IG. I am here to make a product look good! My content focuses on showing off profit details and making something looking rad af</p>
            </div>
            <div className='w-1/3 bg-[#b8d1ff] px-5'>
              <h2 className='mb-2 text-2xl text-center'>Engaging</h2>
              <p>This not only means content that makes a someone stop to look at a product but also staying in with latest memes or “inside jokes” of the internet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const tiktokHighlights = await client.fetch('*[_type == "tiktok-highlights"]');
  return {
    props:{ tiktokHighlights }
  }
}

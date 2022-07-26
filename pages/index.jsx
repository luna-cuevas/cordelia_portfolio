import { client } from '../lib/client'
import ContactForm from '../components/ContactForm'
// Import Third Party Components
import { 
  Navigation, 
  Pagination, 
  EffectCreative, 
  Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Script from 'next/script';
import { useWidth } from '../lib/windowWidth';

const Home = ( { tiktokHighlights, pinterestHighlights } ) => {
  const windowWidth = useWidth();

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
            <p className=' m-auto text-xl font-light'>I have been working in the fashion industry for 4 years, starting off as a visual merchandiser at Forever 21 and working my way to becoming a social media associate for Dolls Kill specializing in making video content and Pinterest boards.

            I have been pursing artistic skating for 5 years with high marks in performance and personality. I have skated for entertainment purposes with Netflix & advertised skates for various skate brands like Sugar Thrillz, C7 skates, and Impala. Skating & fashion are two mediums I use to express myself & I am incredibly lucky to have success in both.</p>
          </div>
          <div className='justify-evenly flex w-full my-4'>
            <div className='w-1/3 px-5 bg-[#ddd3ff] '>
              <img className='rounded-2xl w-10/12 mx-auto my-4' src="/images/aesthetic.jpg" alt="" />
              <h2 className='mb-2 text-2xl text-center'>Aesthetics</h2>
              <p className='pb-4 text-sm font-light'>Using knowledge of different aesthetics to make products look appealing to a wide audience. Whatever your brand is, I got you! I have been an avid Pinterest and tumblr user for 10 years and know exactly how to curate a vision no matter what you’re customers vibe is.</p>
            </div>
            <div className='w-1/3 box-border px-5 bg-[#ffdede]'>
              <img className='rounded-2xl w-10/12 mx-auto my-4' src="/images/product-focused.png" alt="" />
              <h2 className='mb-2 text-2xl text-center'>Product Focused</h2>
              <p className='text-sm font-light'>This is not about me wanting free clothes or a tag on IG. I am here to make a product look good! My content focuses on showing off profit details and making something looking rad af</p>
            </div>
            <div className='w-1/3 bg-[#b8d1ff] px-5'>
              <img className='rounded-2xl w-10/12 mx-auto my-4' src="/images/engaging.jpg" alt="" />
              <h2 className='mb-2 text-2xl text-center'>Engaging</h2>
              <p className='text-sm font-light'>This not only means content that makes a someone stop to look at a product but also staying in with latest memes or “inside jokes” of the internet.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Highlights */}
      <div className='flex max-w-[1000px] flex-wrap mx-auto flex-col min-h-screen'>
        <div className='border-y-2 w-fit flex flex-col flex-wrap py-5 my-5 border-gray-300'>
          <h1 className='m-auto text-2xl text-center underline'>Tik Tok Highlights</h1>
          <Swiper
            modules={[ 
              Navigation, 
              Pagination, 
              EffectCreative,
              Autoplay]}
            slidesPerView={windowWidth < 768 ? 1 : 3}
            navigation
            loop={true}
            autoplay={{
              delay: 15000,
              disableOnInteraction: false,
            }}
            className="mySwiper w-screen max-w-[1000px] flex-wrap mx-auto"
            pagination={{ clickable: true }}
          >
            {tiktokHighlights.map((highlight, id) => (
              <SwiperSlide className='flex w-full py-8 m-auto' key={id}>
                <iframe className='h-[400px] w-full m-auto' src={highlight.url.match(/(https?:\/\/[^ ]*)/)} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              </SwiperSlide>
            ))}
          </Swiper>
          <p className='w-5/6 m-auto my-5 text-xl font-light'>I got my introduction to the app while spearheading the Dolls Kill tik tok page. This included creating the account, reaching out to their first tik Tok influencers, working with well known creators, planning content, as well as finding the brand voice in the medium of 15 second videos & learning how to engage the costumer on the app. I have been mastering tik tok since October 2019 & would consider myself very well versed in creating clean content that focuses on product as well as contributes to current trends both in and out of the app.</p>
          <button className='w-fit m-auto text-center' id='bn30'>
            <Link href='/tiktoks'>See more</Link>
          </button>
        </div>
        <div className='border-b-2 flex-wrap flex flex-col max-w-[1000px] py-5 my-5 border-gray-300'>
          <h1 className='m-auto my-10 text-2xl text-center underline'>Pinterest Highlights</h1>
          <span className='flex flex-wrap justify-around h-full'>
            {pinterestHighlights.map((highlight, id) => (
              <a className='' key={id} data-pin-do="embedBoard" data-pin-board-width="350" data-pin-scale-height="400" data-pin-scale-width="80" data-pin-build="doBuild" href={highlight?.url}></a>
            ))}
          </span>
          <p className='w-5/6 m-auto my-5 text-xl font-light'>I have always had an eye for strong visual aesthetics both niche & widely trendy. From the concept of the board to the arrangement of images everything on a Pinterest board I make has a purpose that perpetuates the desired vibes of your brand.</p>
        </div>
      </div>
      {/* Contact form */}
      <div>
        <ContactForm />
      </div>
      <Script async defer src="//assets.pinterest.com/js/pinit.js"></Script>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const tiktokHighlights = await client.fetch('*[_type == "tiktok-highlights"]');
  const pinterestHighlights = await client.fetch('*[_type == "pinterest-highlights"]');
  return {
    props:{ tiktokHighlights, pinterestHighlights }
  }
}


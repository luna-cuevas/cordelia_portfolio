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
import Head from 'next/head';
import { useEffect, useState } from 'react';

const Home = ( { tiktokHighlights, pinterestHighlights } ) => {
  const windowWidth = useWidth();
  const [dataHighlights, setTikTokHighlights] = useState([]);

  useEffect(() => {
    setTikTokHighlights(tiktokHighlights);
  }, []);

  return (
    <div className='flex flex-col  m-auto max-w-[1400px]'>
      {/* Hero */}
      <div className='relative flex flex-wrap min-h-screen m-auto'>
        <div className='h-fit w-fit absolute -top-[60vh] bottom-0 left-0 right-0 flex m-auto'>
          <img className='w-[80px] h-fit' src="/images/flower2.gif" alt="" />
          <img className='w-[80px] h-fit' src="/images/sailormoonheart.gif" alt="" />
          <img className='w-[80px] h-fit' src="/images/flower2.gif" alt="" />
        </div>
        <div className='flex flex-col w-full px-4 m-auto'>
          <h1 className='md:text-8xl text-6xl text-center m-auto text-[#918fe6] font-["Groovin"]'>Brooke Cordelia Harvey</h1>
          <div className='md:text-2xl flex flex-wrap justify-center gap-4 mt-6 text-xl'>
            <h2>Content Creator</h2>
            <span>•</span>
            <h2>Stylist</h2>
            <span>•</span>
            <h2>Roller Skater</h2>
            <span>•</span>
            <h2>Aesthetics Curator</h2>
          </div>
          <div className='h-14 md:w-24 flex w-20 gap-4 m-auto my-4'>
            <a className='w-1/2' target='_blank' href="https://www.tiktok.com/@divastar_69?lang=en"><img src="/images/tiktok.svg" alt="tik tok logo link" /></a>
            <a className='w-1/2' target='_blank' href="https://www.instagram.com/thegreenfaerie_/"><img src="/images/insta.svg" alt="insta logo link" /></a>
          </div>
        </div>
      </div>
      {/* About */}
      <div className='flex justify-center w-screen max-w-[1000px] m-auto flex-col min-h-screen'>
        <h1 className='flex mx-auto mb-4 text-3xl md:text-4xl font-["Lobster_Two"]'>My background...</h1>
        <div className='flex flex-col p-4'>
          <div className='md:flex-row md:px-10 flex flex-col w-full mb-4'>
            <img className='w-[150px] m-auto h-fit rounded-lg md:float-none float-left pr-4' src="/images/cordelia-headshot.jpg" alt="" />
            <p className='md:w-1/2 md:py-0 px-2 py-3 text-lg font-light'>I have been working in the fashion industry for 4 years, starting off as a visual merchandiser at Forever 21 and working my way to becoming a social media associate for Dolls Kill specializing in making video content and Pinterest boards. I have been pursing artistic skating for 5 years with high marks in performance and personality.</p>
            <p className='md:w-1/2 px-2 text-lg font-light'>I have skated for entertainment purposes with Netflix & advertised skates for various skate brands like Sugar Thrillz, C7 skates, and Impala. Skating & fashion are two mediums I use to express myself & I am incredibly lucky to have success in both.</p>
          </div>
          <div className='justify-evenly md:flex-row flex flex-col w-full my-4'>
            <div className='md:w-1/3 py-2 px-5 bg-[#ddd3ff] '>
              <img className='rounded-2xl h-fit md:w-10/12 md:float-none float-left w-5/12 px-3 mx-auto my-4' src="/images/aesthetic.jpg" alt="" />
              <h2 className=' md:text-2xl mb-2 text-lg text-center font-["Lobster_Two"]'>Aesthetics</h2>
              <p className=' text-sm font-light'>Using knowledge of different aesthetics to make products look appealing to a wide audience. Whatever your brand is, I got you! I have been an avid Pinterest and tumblr user for 10 years and know exactly how to curate a vision no matter what you’re customers vibe is.</p>
            </div>
            <div className='md:w-1/3 py-2 box-border px-5 bg-[#ffdede]'>
              <img className='rounded-2xl md:w-10/12 md:float-none float-right w-5/12 px-3 mx-auto my-4' src="/images/product-focused.png" alt="" />
              <h2 className=' md:text-2xl mb-2 text-lg text-center font-["Lobster_Two"]'>Product Focused</h2>
              <p className='text-sm font-light'>This is not about me wanting free clothes or a tag on IG. I am here to make a product look good! My content focuses on showing off profit details and making something looking rad af</p>
            </div>
            <div className=' md:w-1/3 py-2 bg-[#b8d1ff] px-5'>
              <img className='rounded-2xl md:w-10/12 md:float-none float-left w-5/12 px-3 mx-auto my-4' src="/images/engaging.jpg" alt="" />
              <h2 className='md:text-2xl mb-2 text-lg text-center font-["Lobster_Two"]'>Engaging</h2>
              <p className=' text-sm font-light'>This not only means content that makes a someone stop to look at a product but also staying in with latest memes or “inside jokes” of the internet.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Highlights */}
      <div className='flex max-w-[1000px] flex-wrap mx-auto flex-col min-h-screen'>
        <div className='border-y-2 w-fit flex flex-col flex-wrap py-5 my-5 border-gray-300'>
          <h1 className='md:text-4xl m-auto text-3xl text-center font-["Lobster_Two"]'>Tik Tok Highlights</h1>
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
            {dataHighlights.map((highlight, id) => (
              <SwiperSlide className='flex w-full px-4 py-8 m-auto' key={id}>
                <div>
                  <video className='md:w-full w-3/4 m-auto' controls src={highlight.videoUpload}></video>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='md:flex-row flex flex-col gap-8 px-5'>
            <p className='md:w-1/2 md:text-xl md:my-5 m-auto text-lg font-light'>I got my introduction to the app while spearheading the Dolls Kill tik tok page. This included creating the account, reaching out to their first tik Tok influencers, working with well known creators, planning content, as well as finding the brand voice in the medium of 15 second videos & learning how to engage the costumer on the app.</p>
            <p className='md:w-1/2 md:text-xl md:my-5 m-auto text-lg font-light'>I have been mastering tik tok since October 2019 & would consider myself very well versed in creating clean content that focuses on product as well as contributes to current trends both in and out of the app.</p>
          </div>
          <button className='w-fit mt-4 py-2 text-white px-4 m-auto rounded-lg bg-[#7e7eff] text-2xl text-center hover:bg-[#6464d6]' >
            <Link href='/tiktoks'>See more</Link>
          </button>
        </div>
        <div className='border-b-2 flex-wrap flex flex-col max-w-[1000px] py-5 my-5 border-gray-300'>
          <h1 className='md:text-4xl m-auto my-10 text-3xl text-center font-["Lobster_Two"]'>Pinterest Highlights</h1>
          <div className='md:w-full justify-evenly flex flex-wrap w-screen h-full gap-4 px-10 my-4'>
            {pinterestHighlights?.map((highlight, id) => (
              <a className='' key={id} data-pin-do="embedBoard" data-pin-board-width="350" data-pin-scale-height="400" data-pin-scale-width="80" data-pin-build="doBuild" href={highlight?.url}></a>
            ))}
          </div>
          <p className='w-5/6 m-auto my-5 text-xl font-light'>I have always had an eye for strong visual aesthetics both niche & widely trendy. From the concept of the board to the arrangement of images everything on a Pinterest board I make has a purpose that perpetuates the desired vibes of your brand.</p>
          <button className='w-fit mt-4 py-2 text-white px-4 m-auto rounded-lg bg-[#7e7eff] text-2xl text-center hover:bg-[#6464d6]' >
            <Link href='/pinterest'>See more</Link>
          </button>
        </div>
      </div>
      {/* Contact form */}
      <div>
        <ContactForm />
      </div>
    </div>
  )
}

export default Home

export const getServerSideProps = async () => {
  const tiktokHighlights = await client.fetch('*[_type == "tiktok-highlights"]{category, "videoUpload": video.asset->url}');
  const pinterestHighlights = await client.fetch('*[_type == "pinterest-highlights"]');
  return {
    props:{ tiktokHighlights, pinterestHighlights }
  }
}


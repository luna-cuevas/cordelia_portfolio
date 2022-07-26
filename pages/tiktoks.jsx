import React from 'react'
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
import { useWidth } from '../lib/windowWidth';
import { client } from '../lib/client'
import Modal from '../components/Modal';


const tiktoks = ( { tiktoks, tiktokHighlights } ) => {

  const windowWidth = useWidth();

  return (
    <div className='flex flex-col max-w-[1200px] m-auto min-h-screen'>
      <div className='flex flex-col m-auto'>
        <h1 className='m-auto text-3xl'>Categories</h1>
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
          {tiktokHighlights.map((video, id) => (
            <SwiperSlide className='flex flex-col w-full py-8 m-auto' key={id}>
              <iframe className='h-[400px] w-full m-auto' src={video.url.match(/(https?:\/\/[^ ]*)/)} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              <button>Test</button>
            </SwiperSlide>
          ))}
        </Swiper>
        <h1 className='m-auto my-10 text-3xl'>All Videos</h1>
        <div className='columns-4 flex flex-wrap'>
          {tiktoks.map((video, id) => (
            <div className='m-auto my-4' key={id}>
              <iframe className='h-[400px] w-full m-auto' src={video.url.match(/(https?:\/\/[^ ]*)/)} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              {/* <Modal video={video} id={id} /> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default tiktoks

export const getServerSideProps = async () => {
  const tiktokHighlights = await client.fetch('*[_type == "tiktok-highlights"]');
  const tiktoks = await client.fetch('*[_type == "tiktokVideos"]');
  return {
    props:{ tiktoks, tiktokHighlights }
  }
}
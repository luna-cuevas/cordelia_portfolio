import React, { useEffect, useState } from 'react'
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

  const [data, setTikToks] = useState([]);
  const [dataHighlights, setTikTokHighlights] = useState([]);

  useEffect(() => {
    setTikToks(tiktoks);
    setTikTokHighlights(tiktokHighlights);
  }, []);

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
          {dataHighlights.map((video, id) => (
            <SwiperSlide className='flex flex-col w-full py-8 m-auto' key={id}>
              <iframe className='h-[500px] md:h-[400px] w-full m-auto' src={video.url.match(/(https?:\/\/[^ ]*)/)} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              <button className='w-1/2 m-auto mt-4 rounded-xl py-2 bg-[#f6b5f6]'>{video.category}</button>
            </SwiperSlide>
          ))}
        </Swiper>
        <h1 className='m-auto my-10 text-3xl'>All Videos</h1>
        <div className='columns-4 flex flex-wrap'>
          {tiktoks.map((video, id) => (
            <div className='m-auto my-4' key={id}>
              <iframe className='md:h-[400px] h-screen md:w-full w-screen m-auto' src={video.url.match(/(https?:\/\/[^ ]*)/)} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
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
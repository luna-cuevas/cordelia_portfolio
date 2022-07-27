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
import ModalVideo from 'react-modal-video';
import '../node_modules/react-modal-video/css/modal-video.css';
import Modal from '../components/Modal';


const tiktoks = ( { tiktoks, tiktokHighlights } ) => {

  const [data, setTikToks] = useState([]);
  const [dataHighlights, setTikTokHighlights] = useState([]);
	const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    setTikToks(tiktoks);
    setTikTokHighlights(tiktokHighlights);
  }, []);

  const [openModal, setOpenModal] = useState(null);
  const [modalState, setModalState] = useState(false);

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
            <SwiperSlide className='flex flex-col px-4 py-8 m-auto' key={id}>
              <video className='md:w-full w-3/4 m-auto' controls src={video.videoUpload}></video>
              {/* <iframe className='h-[500px] md:h-[400px] w-full m-auto' src={video.url.match(/(https?:\/\/[^ ]*)/)} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
              <button className='w-1/2 m-auto mt-4 rounded-xl py-2 bg-[#f6b5f6]'>{video.category}</button>
            </SwiperSlide>
          ))}
        </Swiper>
        <h1 className='m-auto my-10 text-3xl'>All Videos</h1>
        <div className='columns-2 md:columns-4 flex flex-wrap'>
          {tiktoks.map((video, id) => (
            <div className='md:w-1/4 relative flex flex-col justify-center w-1/2 px-4 m-auto my-4' key={id}>
              <video className='border-4 border-[#918fe6] h-fit p-2 bg-[#fee1ff] m-auto' controls src={video.videoUpload}></video>
              <button onClick={() => {setModalState(true); setOpenModal(video.videoUpload);}} className="block absolute h-full w-full bg-transparent focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button" >
              </button>
            </div>
          ))}
          <Modal modalState={modalState} setModalState={setModalState} openModal={openModal} setOpenModal={setOpenModal} />
        </div>
      </div>
    </div>
  )
}

export default tiktoks

export const getServerSideProps = async () => {
  const tiktokHighlights = await client.fetch('*[_type == "tiktok-highlights"]{category, "videoUpload": video.asset->url}');
  // const tiktoks = await client.fetch('*[_type == "tiktokVideos"]');
  const tiktoks = await client.fetch('*[_type == "tiktokVideos"] {"videoUpload": video.asset->url}');
  return {
    props:{ tiktoks, tiktokHighlights }
  }
}
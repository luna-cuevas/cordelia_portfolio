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
import '../node_modules/react-modal-video/css/modal-video.css';
import Modal from '../components/Modal';


const tiktoks = ( { tiktoks, tiktokHighlights } ) => {
  const [data, setTikToks] = useState([]);
  const [dataHighlights, setTikTokHighlights] = useState([]);
	const [isOpen, setOpen] = useState(false)
  const [tagFilter, setTagFilter] = useState('All');
  const [openModal, setOpenModal] = useState(null);
  const [modalState, setModalState] = useState(false);
  const windowWidth = useWidth();
  let allTags = []

  function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  useEffect(() => {
    setTikToks(tiktoks);
    setTikTokHighlights(tiktokHighlights);
  }, []);

  data.map((obj) => {
    if(obj.myTags !== null) {
      obj.myTags?.map(tag => 
        allTags.push(tag.value))
    }
  })

  let filteredTags = allTags.filter(onlyUnique);

  return (
    <div className='flex flex-col max-w-[1200px] m-auto min-h-screen'>
      <div className='flex w-full flex-col m-auto'>
        <h1 className='m-auto text-3xl font-["Lobster_Two"]'>Top Categories</h1>
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
              <div className='relative'>
                <video className='md:w-full w-3/4 m-auto' controls src={video.videoUpload}></video>
                <button onClick={() => {setModalState(true); setOpenModal(video.videoUpload);}} className=" absolute top-0 bottom-0 left-0 right-0 block w-full h-full bg-transparent" type="button" ></button>
              </div>
              {/* <iframe className='h-[500px] md:h-[400px] w-full m-auto' src={video.url.match(/(https?:\/\/[^ ]*)/)} frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> */}
              <div className='md:w-full flex flex-wrap w-8/12 m-auto'>
                {video.myTags.slice(0,4).map((tag, id) => (
                  <button onClick={(() => setTagFilter(tag.value))} key={id} className='text-base font-light m-auto mt-4 px-3 rounded-xl py-[2px] bg-[#f6b5f6]'>{capitalizeFirstLetter(tag.value)}</button>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <h1 className='m-auto my-10 text-3xl font-["Lobster_Two"]'> {capitalizeFirstLetter(tagFilter)} Videos</h1>
        <div className='flex flex-wrap justify-center gap-4 pb-4 text-lg border-b-2 border-gray-300'>
          <button className='bg-[#f3b0e3] rounded-xl px-3 py-[2px] focus:outline-4 focus:outline focus:outline-[#f89feb]' onClick={(() => setTagFilter('All'))}>All</button>
          {filteredTags.map((tag, index) => (
            <button className='bg-[#7e7eff] focus:outline-4 focus:outline focus:outline-[#f89feb] rounded-xl px-3 py-[2px] text-white' onClick={(() => setTagFilter(tag))} key={index}>{capitalizeFirstLetter(tag)}</button>
          ))}
        </div>
        <div className='columns-2 md:columns-4 flex flex-wrap my-16'>
          {tagFilter !== 'All' ? 
            data.filter(tiktok => tiktok.myTags?.map((tag) => tag.value).includes(tagFilter)).map((video, id) => (
              <div className='md:w-1/4 h-fit relative flex flex-col justify-center w-1/2 px-4 m-auto my-4' key={id}>
                <video className='border-4 border-[#918fe6] h-fit p-2 bg-[#fee1ff] m-auto' controls src={video.videoUpload}></video>
                <button onClick={() => {setModalState(true); setOpenModal(video.videoUpload);}} className="focus:ring-4 focus:outline-none absolute top-0 bottom-0 left-0 right-0 block w-full h-full text-sm font-medium text-center bg-transparent rounded-lg" type="button" >
                </button>
              </div>
            ))
            :
            data.map((video, id) => (
              <div className='md:w-1/4 relative flex flex-col justify-center w-1/2 px-4 m-auto my-4' key={id}>
                <video className='border-4 border-[#918fe6] h-fit p-2 bg-[#fee1ff] m-auto' controls src={video.videoUpload}></video>
                <button onClick={() => {setModalState(true); setOpenModal(video.videoUpload);}} className="focus:ring-4 focus:outline-none absolute top-0 bottom-0 left-0 right-0 block w-full h-full text-sm font-medium text-center bg-transparent rounded-lg" type="button" >
                </button>
              </div>
            ))
          }
          {filteredTags !== tagFilter && tagFilter !== 'All' && data.filter(tiktok => tiktok.myTags?.map((tag) => tag.value).includes(tagFilter)).length === 0 && 
            <div className='h-fit mx-auto mt-10'>
              <h1 className='mx-auto text-4xl text-center'>
                Sorry, no {capitalizeFirstLetter(tagFilter)} content right now :(  
                <br />
                Press All to load more
              </h1>
            </div>
          }
          <Modal modalState={modalState} setModalState={setModalState} openModal={openModal} setOpenModal={setOpenModal} />
        </div>
      </div>
    </div>
  )
}

export default tiktoks

export const getServerSideProps = async () => {
  const tiktokHighlights = await client.fetch('*[_type == "tiktok-highlights"]{"videoUpload": video.asset->url, myTags}');
  // const tiktoks = await client.fetch('*[_type == "tiktokVideos"]');
  const tiktoks = await client.fetch(`
    *[_type == 'tiktokVideos'] {
      'videoUpload': video.asset->url,
      myTags
    }
  `);
  return {
    props:{ tiktoks, tiktokHighlights }
  }
}
import React, { useRef } from 'react'

const Modal = ( { openModal, setOpenModal, modalState, setModalState } ) => {
  const vidRef = useRef(null);
  const handlePlayVideo = () => {
    vidRef.current.pause();
  }
  const handlePauseVideo = () => {
    if(!vidRef.current.paused) {
      vidRef.current.pause();
    } else {
      console.log('playing');
      vidRef.current.play();  
    }
  }
  return (
    <div className={`${modalState ? 'flex': 'hidden'} md:inset-0 md:h-full fixed top-0 bottom-0 left-0 right-0 z-50 w-screen h-screen overflow-x-hidden overflow-y-auto`}>
      <button onClick={() => {setOpenModal(null); handlePlayVideo(); setModalState(false)}} className='absolute top-0 cursor-pointer bottom-0 left-0 z-0 right-0 w-screen h-screen bg-[#0000009b]' />
      <div className="w-fit h-fit relative z-20 flex p-4 m-auto">
        <div className="dark:bg-gray-700 relative m-auto bg-white rounded-lg shadow">
          <button onClick={() => {setOpenModal(null); handlePlayVideo(); setModalState(false)}} type="button" className="absolute top-0 right-1 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 z-30 rounded-lg text-lg p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" >
            <svg aria-hidden="true" className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="relative z-20 flex p-4 pt-10 text-center">
            <button onClick={() => {handlePauseVideo()}} className='h-5/6 top-10 absolute left-0 right-0 z-20 w-full bg-transparent cursor-pointer' />
            <video ref={vidRef} className='md:max-h-[800px] cursor-grab h-2/3 m-auto' autoPlay controls src={openModal}></video>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default Modal
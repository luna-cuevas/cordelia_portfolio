import React, { useState } from 'react'
import ImageModal from '../components/ImageModal';
import { client, urlFor } from '../lib/client'

const visuals = ( { visuals } ) => {
  const [openModal, setOpenModal] = useState(null);
  const [modalState, setModalState] = useState(false);

  return (
    <div className='flex flex-col w-11/12 max-w-[1200px] m-auto min-h-screen'>
      <div className='md:columns-5 columns-2 justify-center md:gap-8 flex flex-wrap gap-6 mt-4'>
        {visuals.map((image, id) => (
          <div key={id} className='relative w-[45%] md:w-1/6 h-fit border-4 p-2 bg-[#fee1ff] border-[#918fe6] flex flex-col'>
            <img  className='' key={id} src={urlFor(image.image)}></img>
            <button onClick={() => {setOpenModal(urlFor(image.image)); setModalState(true)}} className="focus:outline-none absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-transparent" type="button" />
          </div>
        ))}
      </div>
      <ImageModal modalState={modalState} setModalState={setModalState} openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  )
}

export default visuals

export const getServerSideProps = async () => {
  const visuals = await client.fetch('*[_type == "visuals"]');
  return {
    props:{ visuals }
  }
}
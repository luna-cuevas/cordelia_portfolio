import Script from 'next/script'
import React from 'react'
import { client } from '../lib/client'

const pinterest = ( { boards } ) => {
  return (
    <div className='flex flex-col max-w-[1200px] m-auto min-h-screen'>
      <h1 className='m-auto text-3xl'>Pinterest Boards</h1>
      <div className='flex gap-6'>
        {boards.map((board, id) => (
          <div key={id} className='flex flex-col w-1/3'>
            <h1 className='m-auto text-3xl'>{board.title}</h1>
            <span className='flex flex-wrap justify-around h-full'>
              <a className='' key={id} data-pin-do="embedBoard" data-pin-board-width="500" data-pin-scale-height="400" data-pin-scale-width="80" data-pin-build="doBuild" href={board?.url}></a>
            </span>
          </div>
        ))}
      </div>
      <Script async defer src="//assets.pinterest.com/js/pinit.js"></Script>
    </div>
  )
}

export default pinterest


export const getServerSideProps = async () => {
  const boards = await client.fetch('*[_type == "pinterestBoards"]');
  return {
    props:{ boards }
  }
}
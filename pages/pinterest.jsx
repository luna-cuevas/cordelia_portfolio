import Script from 'next/script'
import React from 'react'
import { client } from '../lib/client'

const pinterest = ( { boards } ) => {
  return (
    <div className='flex flex-col max-w-[1200px] m-auto min-h-screen'>
      <div className='columns-3 justify-evenly flex flex-wrap gap-8 mt-4'>
        {boards.map((board, id) => (
          <div key={id} className='md:w-1/4 flex flex-col w-3/4'>
            <h1 className='m-auto text-3xl'>{board.title}</h1>
            <div className='h-full my-4'>
              <a className='' key={id} data-pin-do="embedBoard" data-pin-board-width="500" data-pin-scale-height="400" data-pin-scale-width="80" data-pin-build="doBuild" href={board?.url}></a>
            </div>
          </div>
        ))}
      </div>
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
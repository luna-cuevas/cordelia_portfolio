import React from 'react'
import { client, urlFor } from '../lib/client'

const visuals = ( { visuals } ) => {
  return (
    <div className='flex flex-col max-w-[1200px] m-auto min-h-screen'>
      <div className='columns-3 justify-evenly flex flex-wrap gap-8 mt-4'>
        {visuals.map((image, id) => (
          <div key={id} className='md:w-1/4 flex flex-col w-3/4'>
            <div className='h-full my-4'>
              <img className='' key={id} src={urlFor(image.image)}></img>
            </div>
          </div>
        ))}
      </div>
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
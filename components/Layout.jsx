import React from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <div className='absolute'>
      <NavBar />
      <span className='bg-[linear-gradient(180deg,#e6fff4,#e0eaff,#f6e7ff)] fixed w-screen -z-10 h-screen top-0 bottom-0 left-0 right-0' />
      <section className='w-screen mt-32'>
        {children}
      </section>
    </div>
  )
}

export default Layout
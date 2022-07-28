import Head from 'next/head'
import React from 'react'
import NavBar from './NavBar'

const Layout = ({children}) => {
  return (
    <div className='absolute font-["Nunito"]'>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Lobster+Two:wght@400;700&family=Nunito:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <NavBar />
      <span className='bg-[linear-gradient(180deg,#e6fff4,#e0eaff,#f6e7ff)] fixed w-screen -z-10 h-screen top-0 bottom-0 left-0 right-0' />
      <main className='md:mt-32 w-screen mt-16'>
        {children}
      </main>
    </div>
  )
}

export default Layout
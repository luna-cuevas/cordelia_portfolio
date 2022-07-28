import React from 'react'
import ContactForm from '../components/ContactForm'

const contact = () => {
  return (
    <div className='h-fit flex flex-wrap w-screen overflow-hidden'>
      <div className='md:w-1/2 md:order-1 flex order-2 w-screen'>
        <img className='w-full m-auto' src="/images/contact.svg" alt="" />
      </div>
      <div className='md:w-1/2 order-1 w-screen h-full'>
        <ContactForm />
      </div>
    </div>
  )
}

export default contact
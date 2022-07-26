import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react';

const ContactForm = () => {
  const form = useRef()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  // EmailJS setting id and template id variables
  const submit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      const serviceId = '';
      const templateId = '';
      const userId = '';
      const templateParams = {
        name,
        email,
        message
      };
      // If variable isn't set or input is missing, error will be console logged
      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(response => console.log(response))
        .then(error => console.log(error));
      // After email has been sent, all variables are now set to blank again.
      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      // if no data is input, error will alert user
      alert('Please fill in all fields.');
    }
  }
  
  return (
    <div className='h-fit overflow-hidden'>
      <div className='flex flex-col mt-10'>
        <h1 className='md:text-3xl m-auto mb-2 text-2xl text-white'>Contact Us</h1>
        <div className="w-5/6 pb-4 md:max-w-[700px] mx-auto">
          <div className="rounded-xl sm:rounded-md p-6 bg-gray-800 border border-gray-600">
            <form ref={form} onSubmit={submit}>
              <label className="block mb-6">
                <span className="text-gray-300">Your name</span>
                <input
                  name="name"
                  type="text"
                  className="focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full p-2 mt-1 text-gray-300 placeholder-gray-600 bg-transparent border-2 border-gray-600 rounded-md shadow-sm"
                  placeholder="Joe Bloggs"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-300">Email address</span>
                <input
                  name="email"
                  type="email"
                  className=" focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full p-2 mt-1 text-gray-300 placeholder-gray-600 bg-transparent border-2 border-gray-600 rounded-md shadow-sm"
                  placeholder="joe.bloggs@example.com"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
              <label className="block mb-6">
                <span className="text-gray-300">Message</span>
                <textarea
                  name="message"
                  className="md:h-[200px] p-2 border-2 block w-full mt-1 border-gray-600 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-gray-600 text-gray-300 "
                  rows="3"
                  placeholder="Tell us what you're thinking about..."
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                ></textarea>
              </label>
              <div className="flex mb-6">
                <button
                  type="submit"
                  value='Send'
                  className=" focus:shadow-outline hover:bg-indigo-800 h-10 px-5 m-auto text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg">
                    Contact Us
                </button>
              </div>
            </form>
            <span className={emailSent ? 'visible text-white' : 'hidden'}>Thank you for your message, we will be in touch in no time!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
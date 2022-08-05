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

        const serviceId = 'service_k6uxc8l';
        const templateId = 'template_463e375';
        const userId = 'user_JcD1331LVSdIeKGHTgDqA';
        const templateParams = { name, email, message };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then(response => console.log(response))
            .then(error => console.log(error));

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    } else {
        alert('Please fill in all fields.');
    }
  }
  
  return (
    <div className='h-fit overflow-hidden'>
      <div className='flex flex-col mt-10'>
        <h1 className='md:text-4xl m-auto mb-10 text-3xl font-["Lobster_Two"] text-black'>Contact Me :)</h1>
        <div className="w-5/6 pb-4 md:max-w-[700px] mx-auto">
          <div className="rounded-xl sm:rounded-md p-6 bg-[#7d7cca] border-2 border-[#726ed2]">
            <form ref={form} onSubmit={submit}>
              <label className="block mb-6">
                <span className="text-white">Full Name</span>
                <input
                  name="name"
                  type="text"
                  className="focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full p-2 mt-1 text-white placeholder-[#ababab] bg-transparent border-2 border-[#b7b6d4] rounded-md shadow-sm"
                  placeholder="Joe Bloggs"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </label>
              <label className="block mb-6">
                <span className="text-white">Email address</span>
                <input
                  name="email"
                  type="email"
                  className=" focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 block w-full p-2 mt-1 text-white placeholder-[#ababab] bg-transparent border-2 border-[#b7b6d4] rounded-md shadow-sm"
                  placeholder="joe.bloggs@example.com"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </label>
              <label className="block mb-6">
                <span className="text-white">Message</span>
                <textarea
                  name="message"
                  className="md:h-[200px] p-2 border-2 block w-full mt-1 border-[#b7b6d4] rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent placeholder-[#ababab] text-white "
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
                  className=" focus:shadow-outline hover:bg-[#424276] h-10 px-5 m-auto text-white transition-colors duration-150 bg-[#1c1c39] rounded-lg">
                    Send
                </button>
              </div>
            </form>
            <span className={`${emailSent ? 'visible text-white ' : 'hidden'} animate-bounce transition-all duration-300 m-auto justify-center text-center text-2xl flex`}>Thank you for your message, we will be in touch in no time!</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
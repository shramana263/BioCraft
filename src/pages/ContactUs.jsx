// src/ContactUs.js
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();
  const { message, setMessage } = useState()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_j59od0t', 'template_u59cg4c', form.current, {
        publicKey: '53caBLw27Z2iJZg1_',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setMessage("Message sent Successfully!")

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <>
      <div className=''>

        <div className="flex items-center justify-center h-[90vh] w-full bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold text-center mb-6 motion-preset-slide-down">Contact Us</h2>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4 motion-preset-pop">
                <label className="block text-sm font-medium text-gray-700 " htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name='from_name'
                  className="mt-1 block w-full p-2 border b order-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4 motion-preset-pop">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name='from_email'
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4 motion-preset-pop">
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  name='message'
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <input
                type="submit"
                value="Send"
                className="w-full motion-preset-pop bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
              />


            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
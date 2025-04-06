import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-10 h-full">
      <div className="px-4">
        <div className="text-4xl flex justify-center items-center gap-4 font-bold text-center mb-6 motion-preset-pop dark:text-white">About Us
          <div className='h-14 w-14 bg-neutral-200 rounded-full flex justify-center items-center p-3'>
            <img src="https://cdn-icons-png.flaticon.com/512/4906/4906311.png" alt="" className='h-full w-full' />
          </div>
        </div>
        <p className="text-lg text-center mb-8 dark:text-gray-300">
          Welcome to our BioCraft! We are dedicated to helping you create stunning and professional biodata effortlessly.
        </p>

        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Our Mission</h2>
        <p className="mb-6 dark:text-gray-300">
          Our mission is to simplify the process of creating biodata for job applications, personal introductions, and more. We believe that everyone deserves to present themselves in the best light.
        </p>

        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Why Choose Us?</h2>
        <ul className="list-disc list-inside mb-6 dark:text-gray-300">
          <li>Easy-to-use templates that save you time.</li>
          <li>Multiple template options to match your personal style.</li>
          <li>Download in PDF format.</li>
          <li>Guidance and tips for creating impactful biodata.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-4 dark:text-white">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md motion-preset-slide-right">
            <h3 className="text-xl font-bold dark:text-white">Shramana Show</h3>
            <p className="text-gray-600 dark:text-gray-400">Co-Founder & CEO</p>
            <p className="text-gray-500 dark:text-gray-400">Passionate about helping individuals showcase their skills.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md motion-preset-slide-right">
            <h3 className="text-xl font-bold dark:text-white">Ankit</h3>
            <p className="text-gray-600 dark:text-gray-400">Co-Founder & CTO</p>
            <p className="text-gray-500 dark:text-gray-400">Expert in web development and user experience.</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md motion-preset-slide-right">
            <h3 className="text-xl font-bold dark:text-white">Piku</h3>
            <p className="text-gray-600 dark:text-gray-400">Marketing Director</p>
            <p className="text-gray-500 dark:text-gray-400">Focused on spreading the word about our amazing tool.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
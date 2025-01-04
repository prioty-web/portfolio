import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <div 
      style={{
        background: 'conic-gradient(from 45deg at 50% 50%, rgba(114, 28, 28, 1) 0%, rgba(0, 0, 0, 1) 48%, rgba(128, 128, 128, 1) 98%)'
      }}
      className="flex flex-col lg:flex-row justify-between items-center pt-24 px-4 md:px-16 bg-cover bg-center"
    >
      {/* Left side - Details */}
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 text-gray-300 mb-8 md:mb-0">
        {/* Animated Heading */}
        <motion.h1
          className="text-3xl md:text-6xl font-serif mb-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Assalamualikum, I'm <span className='text-red-800'>Prioty</span>
        </motion.h1>

        {/* Animated Subheading */}
        <motion.p
          className="text-lg lg:text-2xl mb-6 text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
        >
         As a junior web developer, I am gradually pushing my limits, facing challenges head-on, and constantly learning to become stronger.  I am committed to mastering new skills and bringing fresh, creative ideas to the web development world. That's my nindo: my ninja way!
        </motion.p>

        {/* Animated Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
        >
          <Link to={'/project'}><button className="btn btn-ghost uppercase hover:bg-slate-500 border-0 border-b-4 border-red-900 mt-8"> My All Projects</button></Link>
        </motion.div>
      </div>

      {/* Right side - Image with Background */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img className="w-full md:w-[50vw] object-cover rounded-lg" src="/p.png" alt="Prioty" />
      </div>
    </div>
  );
};

export default Banner;

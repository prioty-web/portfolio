import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center text-white px-8 py-12"
      style={{
        background: "radial-gradient(circle, #000000 40%, #8B0000 100%)",
      }}
    >
      {/* Left Section */}
      <motion.div
        className="lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Gradient Heading */}
        <motion.h2
          className="text-5xl lg:text-6xl font-serif mb-8 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          About <span className="text-gray-100">Me</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg lg:text-xl leading-loose pl-8 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Hi, I'm Anjum Hamim Prioty—a passionate junior web developer with a knack for
          creating dynamic and user-friendly web experiences. Though I started
          my academic journey in Child Development and Social Relationship, I
          quickly realized my heart wasn't in it. With the unwavering support
          of my big brother, I discovered the exciting world of web development,
          and there’s been no looking back since. Every line of code I write is
          a step closer to mastering my craft and shaping my future in tech!
        </motion.p>

        {/* Button */}
        <Link to="/contact">
          <motion.button
            className="mt-8 py-3 px-6 rounded-lg font-semibold text-lg bg-red-600 hover:bg-red-700 uppercase text-white shadow-lg hover:shadow-red-500 transition-all transform hover:scale-105"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Want to contact !
          </motion.button>
        </Link>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="lg:w-1/2 flex justify-center mt-10 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Floating Image */}
        <motion.div
          className="relative w-3/4 lg:w-2/3"
          
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <img
            src="/me.png"
            alt="Prioty"
            className="w-full h-auto rounded-lg border-4 border-gray-950 shadow-2xl"
          />
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-lg border-4 border-transparent  animate-pulse"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;

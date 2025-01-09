import React, { useRef, useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';

const Footer = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_m49lphg',
        'template_bha9njh',
        form.current,
        '7Q6J8fO80DdhKg9ml'
      )
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setStatus('Email sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text);
          setStatus('Error sending email. Please try again.');
        }
      );
  };

  return (
    <footer className="bg-neutral text-neutral-content p-6 md:p-10 flex flex-col md:flex-row md:justify-between">
      {/* Logo and Description */}
      <aside className="md:w-1/3 text-center md:text-left mb-8 md:mb-0">
        <img className="w-20 md:w-28 mx-auto md:mx-0 h-20 md:h-28" src="/PortfolioLogo.png" alt="Logo" />
        <p className="text-sm md:text-base mt-4">
          I am interested in working with any company that thinks my skills will be helpful for
          them. If you are looking for someone like me, please let me know. Or you can just 'say hi'
          to me.
        </p>
        {/* Social Links */}
      <div className="  flex flex-col items-center mt-10 md:items-start mb-8 md:mb-0">
        <h1 className="text-lg md:text-2xl font-bold mb-4 footer-title">Contact Me</h1>
        <p className="text-sm md:text-base mb-4">Feel free to reach out to me via social links:</p>
        <div className="flex space-x-4">
          <a href="mailto:priotyy12@gmail.com">
            <img className="w-8 md:w-10" src="/icon/gmail.png" alt="Gmail" />
          </a>
          <a className="text-2xl md:text-3xl" href="https://www.linkedin.com/in/anjum-hamim-prioty/">
            <FaLinkedin />
          </a>
          <a href="https://www.facebook.com/anjumhamim.prioty/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              className="fill-current text-xl md:text-3xl"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
          <a className="text-2xl md:text-3xl" href="https://github.com/prioty-web">
            <FaGithub />
          </a>
        </div>
      </div>
      </aside>

      

      {/* Contact Form */}
      <div className="w-full md:w-1/2 mx-auto">
        <motion.h2
          className="uppercase text-lg md:text-xl font-serif text-center mb-8 text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <span className="text-red-500">Send a Message</span>
          <br />
          <span className="text-gray-500">Directly</span>
        </motion.h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <label className="block text-gray-600 font-semibold">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="input input-bordered w-full focus:outline-red-800 bg-gray-50 border-2"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <label className="block text-gray-600 font-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              required
              className="input input-bordered w-full focus:outline-red-800 bg-gray-50 border-2"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <label className="block text-gray-600 font-semibold">Message</label>
            <textarea
              name="message"
              required
              className="textarea textarea-bordered w-full focus:outline-red-800 bg-gray-50 border-2"
            ></textarea>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="btn w-full border-b-4 border-red-900 text-red-900 bg-gray-50 hover:bg-gray-400"
          >
            Send Message
          </motion.button>
        </form>
        {status && <p className="mt-4 text-center text-red-800 font-semibold">{status}</p>}
      </div>
    </footer>
  );
};

export default Footer;
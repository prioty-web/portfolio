import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto py-[20vw] text-center">
      {/* Heading */}
      <h2 className="text-4xl font-semibold text-gray-800 mb-6">Connect with Me</h2>
      <p className="text-xl text-gray-600 mb-8">
        I would love to hear from you! Feel free to reach out to me through any of the following platforms:
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-8 flex-wrap">
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/anjum-prioty-1b3636317/"
          className="text-4xl transition-all duration-300 transform hover:scale-110 hover:text-blue-600"
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/prioty-web"
          className="text-4xl transition-all duration-300 transform hover:scale-110 hover:text-gray-800"
        >
          <FaGithub />
        </a>

        {/* Gmail Icon */}
        <a
          href="mailto:priotyy12@gmail.com"
          className="transition-all duration-300 transform hover:scale-110"
        >
          <img src="/icon/gmail.png" alt="Gmail" className="w-10 h-10" />
        </a>

        {/* Facebook Icon */}
        <a
          href="https://www.facebook.com/anjumhamim.prioty/"
          className="text-4xl transition-all duration-300 transform hover:scale-110 hover:text-blue-700"
        >
          <FaFacebook />
        </a>

        {/* Instagram Icon */}
        <a
          href="https://www.instagram.com/trynafindprioty_/"
          className="text-4xl transition-all duration-300 transform hover:scale-110 hover:text-pink-500"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Call to Action */}
      <p className="text-lg text-gray-500 mt-6">
        If you want to collaborate or just say hi, don't hesitate to drop a message!
      </p>
    </div>
  );
};

export default Contact;

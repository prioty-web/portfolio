import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
<footer className="footer bg-neutral text-neutral-content p-10">
  <aside>
  <img className='w-1/4 h-24 '  src="/PortfolioLogo.png" alt="" />
    <p>
    I am interested in working with any company that <br /> thinks my skill will be helpful for them. If you are looking  <br /> for someone like me, please let me know. Or you can just 'say hi' to me
    </p>
  </aside>
  <nav>
  <h1 className="footer-title text-3xl font-bold text-center mb-6">Contact Me</h1>
  <p className="text-center mb-6">Feel free to reach out to me via social links</p>
    <div className="grid grid-flow-col gap-4">
      <a>     
          <div className="text-center">
            <a
              href="mailto:priotyy12@gmail.com"
            >
             <img className='w-5/6' src="/icon/gmail.png" alt="" />
            </a>
        </div>
      </a>
      <a className='text-4xl' href='https://www.linkedin.com/in/anjum-prioty-1b3636317/'>
       <FaLinkedin></FaLinkedin>
      </a>
      <a href='https://www.facebook.com/anjumhamim.prioty/'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
      <a className='text-4xl' href='https://github.com/prioty-web'>
       <FaGithub></FaGithub>
      </a>
    </div>
    
  </nav>
</footer>
        

        
      );
    };

export default Footer;
import React from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
        
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId); 
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    const nav = (
        <>
            <li>
                <Link
                    onClick={() => scrollToSection("banner")}
                    className="md:border-b-4 font-bold border-red-900 text-red-900  md:text-gray-300"
                >
                    Home
                </Link>
            </li>
            <li className="ml-5">
                <Link
                    onClick={() => scrollToSection("skills")}
                    className="md:border-b-4 font-bold border-red-900 text-red-900  md:text-gray-300"
                >
                    Skills
                </Link>
            </li>
            <li className="ml-5">
                <Link
                    onClick={() => scrollToSection("projects")}
                    className="md:border-b-4 font-bold border-red-900  text-red-900  md:text-gray-300"
                >
                    Projects
                </Link>
            </li>
            <li className="ml-5">
                <Link
                    onClick={() => scrollToSection("contact")} // Corrected to use dynamic sectionId
                    className="md:border-b-4 font-bold border-red-900  text-red-900  md:text-gray-300"
                >
                    Contact
                </Link>
            </li>
        </>
    );
    

 
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-gray-500 text-white  mx-auto ">
            <div className="navbar-start">
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content text-gray-100 mt-3 w-52 p-2 shadow bg-slate-50 bg-opacity-20"
                    >
                        {nav}
                    </ul>
                </div>
                <img
                    className="max-md:w-20 md:w-[7vw]  md:h-[5vw] md:pl-5 my-auto"
                    src="/PortfolioLogo.png"
                    alt="Portfolio Logo"
                />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-gray-200 ">
                    {nav}
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://drive.google.com/file/d/1ur0nthZB4MpgB3Uwvj8ZVzGv8UZZh_Eh/view?usp=sharing' className='btn btn-outline  items-center text-gray-300 hover:text-red-900 transition-all duration-300'>Resume <FaDownload></FaDownload></a>
            </div>
        </div>
    );
};

export default Navbar;

import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Query Hunt",
    description: "A dynamic platform for product queries and exploration.",
    demo: "https://query-hunt.web.app/all-products",
    img: "/projects/qh.png",
    stack: ["React", "Firebase", 'MongoDB', 'vercel'],
  },
  {
    title: "Career Council",
    description: "A career counseling platform for job seekers and mentors.",
    demo: "https://career-council-f8d6b.web.app/",
    img: "/projects/ch.png",
    stack: ["React", "Tailwind CSS", "Firebase"],
  },
  {
    title: "Sports Equipment",
    description: "A modern sports gear store with a seamless user experience.",
    demo: "https://sports-equipment-d2de9.web.app/",
    img: "/projects/se.png",
    stack: ["React", "Tailwind", "MongoDB"],
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="group relative bg-gray-800/70 backdrop-blur-lg p-6 rounded-xl shadow-lg transition-transform hover:scale-105 hover:shadow-2xl"
      whileHover={{ scale: 1.05 }}
    >
      {/* Image Section */}
      <div className="overflow-hidden rounded-lg">
        <motion.img
          src={project.img}
          alt={project.title}
          className="w-full h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Content Section */}
      <div className="mt-4">
        <h2 className="text-2xl font-serif text-gray-100">{project.title}</h2>
        <p className="text-gray-400 text-sm mt-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {project.stack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-red-400 hover:text-red-600 font-semibold text-sm transition-colors"
        >
          Visit Demo <FaExternalLinkAlt />
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6">
      <motion.h2
        className="uppercase text-5xl font-serif text-center my-14 text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <span className="text-red-500">recent</span> projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:w-11/12 mx-auto">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
        <Link to={'/project'}><button className="btn btn-ghost uppercase hover:bg-slate-500 border-0 border-b-4 border-red-900 mt-8"> My All Projects</button></Link>
      </div>
      
    </div>
  );
};

export default Projects;

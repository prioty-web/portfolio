import { motion } from "framer-motion";
import React from "react";

// Tool data for both categories
const tools = {
  frontend: [
    { name: "HTML", logo: "/icon/html.png" },
    { name: "CSS", logo: "/icon/css3.png" },
    { name: "JavaScript", logo: "/icon/javascript.png" },
    { name: "Tailwind", logo: "/icon/tailwind.png" },
    { name: "NodeJs", logo: "/icon/node-js.png" },
    { name: "React.js", logo: "/icon/react.png" },
  ],
  methods: [
    { name: "GitHub", logo: "/icon/github.png" },
    { name: "Firebase", logo: "/icon/firebase.png" },
    { name: "Vercel", logo: "/icon/vercel.png" },
    { name: "Netlify", logo: "/icon/netlify.png" },
    { name: "MongoDB", logo: "/icon/mongodb.png" },
    { name: "Chrome Dev", logo: "/icon/crome.png" },
  ],
};

// Animated Gradient Background
const GradientBackground = () => (
  <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-red-800 via-gray-900 to-black animate-gradient-x"></div>
);

// Reusable ToolGrid component with animations
const ToolGrid = ({ tools, title }) => (
  <motion.div
    className="text-center mb-12 md:w-11/12 mx-auto"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <h1 className="text-4xl font-extrabold mb-8 text-gray-100">{title}</h1>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {tools.map((tool, index) => (
        <motion.div
          key={index}
          className="relative flex flex-col items-center bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow"
          whileHover={{
            scale: 1.1,
            rotate: 3,
            boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.5)",
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-800 via-gray-900 to-black rounded-lg opacity-20 blur-md"
            whileHover={{ opacity: 0.4, scale: 1.2 }}
            transition={{ duration: 0.5 }}
          />
          <img src={tool.logo} alt={tool.name} className="w-16 h-16 mb-4" />
          <h2 className="text-lg font-semibold text-gray-200">{tool.name}</h2>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

// Main Component
const MySkill = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white font-sans px-6 py-12">
      {/* Gradient Background */}
      <GradientBackground />

      {/* Section Title */}
      <motion.h2
        className="uppercase text-5xl font-serif text-center my-14 text-gray-100"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <span className="text-red-500">My</span> Skills
      </motion.h2>

      {/* Tools Grids */}
      <ToolGrid tools={tools.frontend} title="Front-end Tools" />
      <ToolGrid tools={tools.methods} title="Tools & Methods" />
    </div>
  );
};

export default MySkill;

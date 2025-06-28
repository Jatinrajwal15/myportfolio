import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { FaReact, FaJs, FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill,RiNextjsFill } from "react-icons/ri";
import { TbBrandVite } from "react-icons/tb";
import { IoLogoVercel } from "react-icons/io5";

import { MdShoppingCart } from "react-icons/md";

const WorkSection = () => {
  const projects = [
    { 
      title: "LOOPVERSE", 
      description: "Loopverse is a dynamic social media platform designed to connect users through photo and video sharing. Inspired by Instagram, it features intuitive UI, real-time interactions, and a vibrant community experience.", 
      image: "/images/projectsimg/1.png",  
      skills: ["React.js", "Vite", "Tailwind"],
      link: "#"
    },
    { 
      title: "Dreamation Resort", 
      description: "A sleek website showcasing a luxury resort with beautiful visuals and easy booking.", 
      image: "/images/projectsimg/2.png", 
      skills: ["Next.JS", "Tailwind", "Vercel", "React.js"],
      link: "https://dreamationresorts.com/"
    },
    { 
      title: "Himalayan Khandu", 
      description: "A travel website focused on Himalayan adventures, featuring scenic visuals and easy trip planning.", 
      image: "/images/projectsimg/3.png",  
      skills: ["Next.JS", "Tailwind", "Vercel", "React.js"],
      link: "https://himalyankhadu.com/"
    },
  ];

  // Mapping skills to icons
  const skillIcons = {
    "React.js": <FaReact size={18} color="#61dafb" />,
    "JavaScript": <FaJs size={18} color="#f7df1e" />,
    "CSS": <FaCss3Alt size={18} color="#264de4" />,
    "Tailwind": <RiTailwindCssFill  size={18} color="#38b2ac" />,
    "Vercel": <IoLogoVercel size={18} color="" />,
    "Next.JS": <RiNextjsFill size={18} color="#f7df1e" />,
    "Vite": <TbBrandVite size={18} color="#646cff" />,
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center p-10 ">

      {/* Scroll Wrapper */}
      <div className="relative w-full max-w-6xl h-[300vh] flex flex-col">
        {projects.map((project, index) => (
          <div
            key={index}
            className="sticky top-0 h-screen flex justify-center items-center"
            style={{ zIndex: index + 1 }} // Reverse stacking order
          >
            <div
              className="group h-[40rem] w-[95%] bg-gray-200 p-14 rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center transition-transform duration-700 relative"
              style={{
                backgroundImage: `url(${project.image})`, 
                backgroundPosition: "center", 
                backgroundSize: "cover",
                zIndex: 0, // image behind content
              }}
            >
              {/* Project Title  */} 
              <h3 className="text-5xl font-bold text-white relative z-10 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-300">
                {project.title}
              </h3>

              <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300 text-3xl opacity-0 hover:opacity-100 transition-opacity duration-300 p-10 relative z-10">
                <p>{project.description}</p>

                {/* Skill Section */}
                <div className="mt-5 flex flex-wrap justify-center gap-6">
  {project.skills.map((skill, i) => (
    <button
      key={i}
      className="relative hover:before:flex before:hidden before:justify-center before:items-center before:h-5 before:text-xs before:px-2 before:content-[attr(data-tooltip)] before:bg-black dark:before:bg-white dark:before:text-black before:text-white before:bg-opacity-70 before:absolute before:-top-7 before:rounded-md
                 hover:-translate-y-2 cursor-pointer hover:scale-110 
                 bg-white dark:bg-[#191818] rounded-full p-3
                 flex justify-center items-center shadow-xl transition-all duration-300 z-10 mb-4"
      data-tooltip={skill}
      type="button"
    >
      {skillIcons[skill] || null}
    </button>
  ))}
</div>


                {/* View Project Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-neutral-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden 
                    before:content-[''] before:absolute before:w-12 before:h-12 before:right-1 before:top-1 before:z-10 before:bg-violet-500 before:rounded-full before:blur-lg 
                    after:content-[''] after:absolute after:z-10 after:w-20 after:h-20 after:bg-rose-300 after:right-8 after:top-3 after:rounded-full after:blur-lg
                    hover:underline hover:underline-offset-4 hover:decoration-2 hover:text-rose-300 
                    hover:before:-bottom-8 hover:before:right-12 hover:after:-right-8 hover:before:blur 
                    hover:border-rose-300 
                    duration-500 before:duration-500 after:duration-500 group-hover:before:duration-500 group-hover:after:duration-500 origin-left"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects Button */}
      <a href="#all-projects">
        <button className="group group-hover:before:duration-500 group-hover:after:duration-1000 after:duration-500 hover:border-sky-300 duration-500 before:duration-500 hover:duration-500 underline underline-offset-2 hover:after:-right-2 hover:before:top-8 hover:before:right-16 hover:after:scale-150 hover:after:blur-none hover:before:-bottom-8 hover:before:blur-none hover:bg-sky-300 hover:underline hover:underline-offset-4 origin-left hover:decoration-2 hover:text-sky-900 relative bg-sky-800 h-16 w-64 border text-left p-3 text-gray-50 text-base font-bold rounded-lg overflow-hidden before:absolute before:w-12 before:h-12 before:content-[''] before:right-1 before:top-1 before:z-10 before:bg-sky-400 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content-[''] after:bg-cyan-600 after:right-8 after:top-3 after:rounded-full after:blur">
          View All Projects
        </button>
      </a>
    </div>
  );
};

export default WorkSection;

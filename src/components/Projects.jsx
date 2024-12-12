import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../context/ThemeContext";
import { portfolio } from "../data/portfolioList";

const projects = [
  {
    id: 1,
    title: "GadgetBazaar",
    description: "A full-stack e-commerce application built with React.js, Node.js, MongoDB, and JWT.",
    liveLink: "https://ecommerce-2024-1baff.web.app/",
    repoLink: "https://github.com/kawsar334/GadgetBazaar_backend",
    frontendrepo:"https://github.com/kawsar334/GadgetBazaar",
    imageUrl: "https://nmgprod.s3.amazonaws.com/media/files/77/79/777972aa95a5599e872d727616925b9d/cover_image_1698325190.jpeg.760x400_q85_crop_upscale.jpg",
  },
  {
    id: 2,
    title: "Social Media App",
    description: "A social media platform with user authentication, CRUD operations, and Cloudinary for media uploads.",
    liveLink: "https://your-live-demo-link.com",
    repoLink: "https://github.com/your-github/social-media-app",
    imageUrl: "https://w3sniff.com/common/article/ui-ux-design1.jpg",
  },
  {
    id: 3,
    title: "Sports Equipment Store",
    description: "A multilingual Quran website with line-by-line translations using React.js and Tailwind CSS.",
    liveLink: "https://your-live-demo-link.com",
    repoLink: "https://github.com/your-github/al-quran-website",
    imageUrl: "https://w3sniff.com/common/article/ui-ux-design1.jpg",
  },
  {
    id: 4,
    title: "Sports Equipment Store",
    description: "A multilingual Quran website with line-by-line translations using React.js and Tailwind CSS.",
    liveLink: "https://your-live-demo-link.com",
    repoLink: "https://github.com/your-github/al-quran-website",
    imageUrl: "https://w3sniff.com/common/article/ui-ux-design1.jpg",
  },
];

const statsData = [
  { title: "React.js", value: "15+ projects", desc: <NavLink to="/">↘︎ See Now</NavLink> },
  { title: "MERN Stack", value: "10+ projects", desc: <NavLink to="/">↘︎ See Now</NavLink> },
  { title: "HTML,CSS", value: "5+ projects", desc: <NavLink to="/">↘︎ See Now</NavLink> },

];


const ProjectSection = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section id="Projects" className="py-12 bg-transparent w-full">
      <div className="w-full mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">
          My Projects
        </h2>
        <p className="text-lg mb-12" data-aos="fade-up" data-aos-delay="100">
          Below are some of the projects I've worked on. Feel free to check them out!
        </p>
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4 w-full md:w-[90%] m-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
          className={`${darkMode ? "card w-full md:w-[40%] bg-[rgba(0,0,0,0.4)] shadow-lg rounded-lg overflow-hidden" : "card w-full md:w-[40%] bg-[black] text-white shadow-lg rounded-lg overflow-hidden"}`}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <figure>
              <img src={project.imageUrl} alt={project.title} className="w-full h-[200px] object-cover" />
            </figure>
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-between items-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  GitHub Repo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="mt-16 flex flex-wrap justify-center items-center gap-4">
        {statsData.map((card, index) => (
          <div
            key={index}
            className="bg-transparent border-blue border shadow-md rounded-lg p-4 text-center w-[200px] h-[120px] flex flex-col justify-start items-center gap-2"
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
          >
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-xl font-semibold">{card.value}</p>
            {card.desc && <p className="text-blue-500">{card.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

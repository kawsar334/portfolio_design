import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../context/ThemeContext";
import { portfolio } from "../data/portfolioList";
import "./navbar.css";
import versatile from "../assets/verse.png"
import g from "../assets/g.png"
import p from "../assets/p.png"
import sport from "../assets/sport.png"



const projects = [
  {
    id: 1,
    title: "versatile ui design",
    description: "Sport eqipment is a web application designed for gadget enthusiasts, allowing users to explore various products, view details, and manage items in their cart . The site also features a dashboard for users to track statistics and interact with product data. darkmode/light mode , firebase secure  authentication  , private routes ...",
    liveLink: "https://scintillating-cobbler-d63e79.netlify.app/",
    repoLink: "https://github.com/kawsar334/versatile-ui_design-",
    frontendrepo: "https://github.com/kawsar334/sports-equipment-store_client_side",
    serverRepo:"https://github.com/kawsar334/sports-equipment-_backend",
    imageUrl: sport,
    tech: [
      "React js",
      "nodejs",
      "mongodb",
      "firebase",
      "Tailwind css ",
      "Aos", "Toastify", "swiper", "React Awesome - Reveal", "React Tooltip"

    ]
  },
  {
    id: 2,
    title: "versatile ui design",
    description: "modern ui/ux design using html css vanilla js, it's totaly responsive ",
    liveLink: "https://kawsar334.github.io/versatile-ui_design-/",
    repoLink: "https://github.com/kawsar334/versatile-ui_design-",
    frontendrepo:"https://github.com/kawsar334/GadgetBazaar",
    imageUrl: versatile,
    tech:[
      "HTML",
      "css3",
      "javascript",
        
    ]
  },
  {
    id: 3,
    title: "Ecommerce design",
    description: "This is a web application designed for gadget enthusiasts, allowing users to explore various products, view details, and manage items in their cart and wishlist. The site also features a dashboard for users to track statistics and interact with product data.",
    liveLink: "https://deft-kelpie-0f29a9.netlify.app/",
    repoLink: "https://github.com/kawsar334/ElectroBay_ecommerce_UI-UX-design-",
    imageUrl: g,
    tech: [
      "React",
      "Tailwind css",
      "Localstorage",

    ]
  },
  {
    id: 4,
    title: "Ecommerce ui/ux design",
    description: "A multilingual Quran website with line-by-line translations using React.js and Tailwind CSS.",
    liveLink: "https://glittering-chimera-f1780d.netlify.app/",
    repoLink: "https://github.com/your-github/al-quran-website",
    imageUrl: "https://portfolio-c34cf.firebaseapp.com/imgs/ecom.png",
    tech: [
      "React",
      "CSS3",
      "RESPONSIVE"

    ]
  },
  {
    id: 5,
    title: "Modern portfolio design ",
    description: "This portfolio website is designed to showcase my projects, skills, and professional experience in the field of web development. It is built with modern front-end technologies, including React.js, TailwindCSS for styling, and DaisyUI for additional UI components..",
    liveLink: "https://chimerical-pegasus-583c4b.netlify.app/",
    repoLink: "https://github.com/kawsar334/personal_portFolio",
    imageUrl:p,
    tech: [
      "React",
      "Netlify",
      "Tailwind CSS",
    ]
  },
];

const statsData = [
  { title: "React.js", value: "15+ projects", desc: <NavLink to="/projects">↘︎ See Now</NavLink> },
  { title: "MERN Stack", value: "10+ projects", desc: <NavLink to="/projects">↘︎ See Now</NavLink> },
  { title: "HTML,CSS", value: "5+ Design", desc: <NavLink to="/projects">↘︎ See Now</NavLink> },
  { title: "Github", value: "59 repositories", desc: <a href="https://github.com/kawsar334" target="_blank">↘︎ See Now</a> },


];


const ProjectSection = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [modal, setModal]= useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleData = (item)=>{
    setData(item);
    setModal(true);
  }
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
       {modal&&<div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.3)] z-[100] "> 

          <div className=" w-full md:w-[90%] m-auto h-full bg-white  text-gray-800 flex justify-center items-center gap-2 flex-col  ">
              <img src={data.imageUrl} alt={data.title} className="w-full md:w-[60%] mt-3 h-[300px] md:h-[500px]  rounded object-cover" />
            <div className="p-4 w-full md:w-1/2 m-auto ">
              <div className=" flex justify-start flex-wrap my-2 items-center">
                <h1 className="text-xl font-semibold  capitalize ">Tech:</h1>
                {data.tech.map((i) => (
                  <span className="ml-1 bg-gray-400 text-white rounded px-1">{i}</span>
                ))}
              </div>
              <h3 className="text- font-semibold mb-2">{data.title}</h3>
              <h3 className="text-[14px] font-semibold mb-2">{data.description}</h3>
              <div className="flex flex-wrap justify-between items-center w-[90%] md:w-[70%] m-auto">
                

                <a
                  href={data.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 border rounded-[5px] bg-blue hover:bg-transparent transition  ease-in duration-300   px-1 cursor-pointer  hover:text-blue-700"
                >
                  Live Demo
                </a>
                <a
                  href={data.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 border rounded-[5px] px-1 cursor-pointer transition-all duration-500 ease-linear  hover:bg-blue"
                >
                  GitHub Repo
                </a>
                {data?.serverRepo && <a
                  href={data.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 border rounded-[5px] px-1 cursor-pointer transition-all duration-500 ease-linear bg-blue text-white"
                >
                  server side
                </a> }
                <button className=" text-white bg-[crimson] px-3 py-1 cursor-pointer rounded    " onClick={()=>setModal(!modal)}>Close</button>

              </div>
           
            </div>
          </div>
        </div>}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`relative cursor-pointer projectcontainer overflow-hidden  ${darkMode ? "card w-full md:w-[30%] bg-[rgba(0,0,0,0.4)] shadow-lg rounded-lg overflow-hidden" : "card w-full md:w-[30%] bg-[black] text-white shadow-lg rounded-lg overflow-hidden"}`}
            data-aos="fade-up "
            data-aos-delay={`${index * 100}`}
          >
            <figure>
              <img onClick={() => handleData(project)} src={project.imageUrl} alt={project.title} className="w-full h-[200px] object-cover" />
            </figure>
           
            <div className="p-4 ">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <div className="absolute top-[100px] right-[10px p-2 flex justify-center items-center gap-1 flex-wrap">
                {project.tech.slice(0,3).map((i) => (
                  <span className="ml-1 bg-red-400 rounded px-1">{i}</span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 border rounded-[5px] bg-blue hover:bg-transparent transition  ease-in duration-300   px-1 cursor-pointer  hover:text-blue-700"
                >
                  Live Demo
                </a>
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 border rounded-[5px] px-1 cursor-pointer transition-all duration-500 ease-linear  hover:bg-blue"
                >
                  GitHub Repo
                </a>
              </div>
              <button className="text-sm     block py-2 cursor-pointer   bg-blue text-white rounded capitalize  w-full  transform translate-y-[80px] detailsbtn" onClick={()=>handleData(project)}>see Details</button>
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

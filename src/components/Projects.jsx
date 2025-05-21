import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeContext } from "../context/ThemeContext";
import { portfolio } from "../data/portfolioList";
import "./navbar.css";
import versatile from "../assets/verse.png"
import n from "../assets/n.png"

import g from "../assets/g.png"
import p from "../assets/p.png"
import sport from "../assets/sport.png"
import Popup from "./Popup";
import { frontend } from "../data/Info";
import DesignModal from "./modals/DesignModal";
import Tittle from "./Tittle";




const projects = [

  {
    id: 1,
    title: "Employee Management System",
    description: "A full-stack Employee Management System where employees can post updates on their workflow, HRs can monitor and process payments, and admins manage employees and payroll..",
    liveLink: "https://reliable-eclair-d8edc7.netlify.app/",
    repoLink: "https://github.com/kawsar334/Employee_Management_server",
    frontendrepo: "https://github.com/kawsar334/Employee_Management_Client",
    serverRepo: "https://github.com/kawsar334/Employee_Management_server",
    imageUrl: n,

    images: [
      "https://funny-cat-943dae.netlify.app/assets/employeehome-Dz4qn0aG.png",
      "https://funny-cat-943dae.netlify.app/assets/employehrdashboard-0u8qo0ZS.png",
      "https://funny-cat-943dae.netlify.app/assets/employeeadmindashboard-CiAbBO6b.png",
      "https://funny-cat-943dae.netlify.app/assets/employedashboard-B01WVBFP.png",
    ],
    features: [
      "Email/password-based authentication (with roles: Employee, HR, Admin)",
      "Employee dashboard to add workflow updates and view payment history",
      "HR dashboard to verify employees, process payments, and manage records",
      "Admin dashboard to manage employees, adjust salaries, and handle payroll",
      "Interactive charts for salary vs. month visualization",
      "Role-specific data and page access control with JWT",
      "Responsive design for mobile, tablet, and desktop views",
      "Social login integration (Google, Github)",
      "Sweet alerts for CRUD operations and notifications",
      "Payment gateway integration (for payment processing)"
    ],

    adminCredentials: {
      email: "admin1@gmail.com",
      password: "Admin1@"
    },
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Mongoose",
      "JWT",
      "Firebase Authentication",
      "TanStack Query",
      "Tailwind CSS",
      "React DatePicker"

    ]
  },
  {
    id: 2,
    title: "Sport Equipment store",
    description: "Sport eqipment is a web application designed for gadget enthusiasts, allowing users to explore various products, view details, and manage items in their cart . The site also features a dashboard for users to track statistics and interact with product data. darkmode/light mode , firebase secure  authentication  , private routes ...",
    liveLink: "https://scintillating-cobbler-d63e79.netlify.app/",
    repoLink: "https://github.com/kawsar334/versatile-ui_design-",
    frontendrepo: "https://github.com/kawsar334/sports-equipment-store_client_side",
    serverRepo: "https://github.com/kawsar334/sports-equipment-_backend",
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
    id: 3,
    title: "Online Tutor Booking Platform",
    description: "This is the Online Tutor Booking Platform, allowing users to browse tutors, book sessions, and manage their tutorials. The platform is fully responsive and features a user-friendly interface with dark/light mode toggling, search functionality,",
    liveLink: "https://gorgeous-shortbread-b2c9fe.netlify.app/",
    repoLink: "https://github.com/kawsar334/client_Language-Exchange_Online-Tutor-Booking",
    frontendrepo: "https://github.com/kawsar334/client_Language-Exchange_Online-Tutor-Booking",
    serverRepo: "https://github.com/kawsar334/server-Language-Exchange---Online-Tutor-Booking-Platform",
    imageUrl: "https://funny-cat-943dae.netlify.app/assets/languageechange-qeHMw8Ma.png",
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
    id: 4,
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


];

const statsData = [
  { title: "React.js", value: "15+ projects", desc: <NavLink to="/projects">↘︎ See Now</NavLink> },
  { title: "MERN Stack", value: "10+ projects", desc: <NavLink to="/projects">↘︎ See Now</NavLink> },
  { title: "HTML,CSS", value: "5+ Design", desc: <NavLink to="/projects">↘︎ See Now</NavLink> },
  { title: "Github", value: "59 repositories", desc: <a href="https://github.com/kawsar334" target="_blank">↘︎ See Now</a> },


];


const ProjectSection = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleData = (item) => {
    setData(item);
    setModal(true);
  }
  const handleTogle = () => {
    setModal(!modal)
  }
  return (
    <section id="Projects" className="py-12 bg-transparent w-full">
      <div className="w-full mx-auto text-center">
        <Tittle text="My Projects"/>
        <p className="text-lg mb-12 px-5" data-aos="fade-up" data-aos-delay="100">
          Below are some of the projects I've worked on. Feel free to check them out!
        </p>
      </div>

      {/* Project Cards */}
      <div className="flex flex-wrap justify-center gap-6 px-4 w-full md:w-[92%] m-auto">
        {modal && <div className="fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.3)] z-[100] ">

          <Popup data={data} handleTogle={handleTogle} />
        </div>}
        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`  card w-full md:w-[30%] h-[400px] relative cursor-pointer projectcontainer  overflow-hidden  ${darkMode ? " bg-[rgba(0,0,0,0.4)] shadow-lg rounded-lg overflow-hidden" : " bg-[black] text-white shadow-lg rounded-lg overflow-hidden"}`}
            data-aos="fade-up "
            data-aos-delay={`${index * 100}`}
          >
            <figure>
              <img onClick={() => handleData(project)} src={project.imageUrl} alt={project.title} className="w-full h-[200px] object-cover" />
            </figure>

            <div className="p-4 ">
              <h3 className="text-xl font-semibold mb-2 w-full  hover:text-blue transition-all duration-500" onClick={() => handleData(project)}>{project.title.slice(0, 20)}...</h3>
              <div className="absolute top-[100px] right-[10px p-2 flex justify-center items-center gap-1 flex-wrap">
                {project.tech.slice(0, 4).map((i) => (
                  <span className="ml-1 bg-black backdrop-opacity-30 rounded px-1">{i}</span>
                ))}
              </div>
              <div className="flex justify-between items-center mt-10 ">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 border  rounded-[5px] bg-blue hover:bg-transparent transition  ease-in duration-300   px-1 cursor-pointer  hover:text-blue-700"
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
            </div>
            <button className="text-sm  absolute bottom-[-60px] left-4      block py-2 cursor-pointer   bg-blue text-white rounded capitalize   w-[90%]     detailsbtn" onClick={() => handleData(project)}>see Details</button>
          </div>
        ))}
      </div>

      <DesignModal text="more works"/>

      {/* Stats Cards */}
      {/* <div className="mt-16 flex flex-wrap justify-center items-center gap-4">
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
      </div> */}
      
    </section>
  );
};

export default ProjectSection;

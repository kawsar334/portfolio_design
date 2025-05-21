
import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import resume from "../../assets/kawsar_firoz_resume.pdf"
import { ThemeContext } from '../../context/ThemeContext';
import DesignModal from '../modals/DesignModal';
import "./navbar.css"

const Navbar2 = () => {
 const { darkMode, setDarkMode } = useContext(ThemeContext)
  const [activeId, setActiveId] = useState("Home"); 
    const sections = ["Home", "skill", "Projects", "About", "services",  "Contact"];
    const [open, setOpen]= useState(false)

      const handleScroll = () => {
          const sections = ["Home", "skill", "Projects", "About", "services", "Contact"];
        for (let id of sections) {
          const element = document.getElementById(id);
          if (
            element &&
            element.getBoundingClientRect().top <= window.innerHeight / 2 &&
            element.getBoundingClientRect().bottom >= window.innerHeight / 2
          ) {
            setActiveId(id);
            break;
          }
        }
      };
    
      // Add event listener for scroll
      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    const Links = () => {
        return (
            <>
                {sections.map((item) => (
                    <li key={item} className=''>
                        <a href={`#${item}`} className={`rounded  px-2 py-1 ${activeId === item ?"active_btn bg-blue overflow-hidden":"bg-transparent"}`}>{item}</a>
                    </li>
                ))}
            </>
        )

    }

    return (
        
        <div className={`w-full h-[70px]  fixed top-0 left-0 z-50 ${darkMode ? "bg-[rgba(0,0,0,0.1)] bg-opacity-20" :"bg-[rgba(0,0,0,0.2)]   text-white"} flex justify-center items-center  backdrop-filter backdrop-blur-lg  firefox:bg-opacity-3 bg-opacity-3 py-2`}>
           

            <div className='w-[95%] md:w-[85%]  relative  h-max   mx-auto flex justify-between items-center  bg-transparent'>
                <a href='#Home' className=" text-xl font-semibold first-letter:text-blue" data-aos="fade-right">
                    kawsar.
                </a>
                <ul className='md:flex justify-center items-center gap-5 hidden   '>

                    <Links />
                </ul>
                <ul onClick={() => setOpen(!open)} className={` absolute rounded-[20px]  md:hidden right-[-10px] top-[65px] w-full  transform ${open ? "translate-x-[-2.5%] opacity-100" : "translate-x-[100%] opacity-0"} transition-all duration-1000 ease-linear flex justify-start items-start flex-col gap-3 p-4 *:pb-1 *:border-b  *:border-b-[rgba(0,0,0,0.1)] *:block *:w-full  bg-gradient-to-t from-black to-blue bg-opacity-50`}>
                    <Links/>
                    <button  className='flex justify-start items-start   text-left '   onClick={() => setDarkMode(!darkMode)}>
                        <i class={`${!darkMode ? "fas fa-moon  " : "fas fa-sun"} mr-4 text-xl`} ></i>
                        <span className='capitalize'>{darkMode ? "Light Mode" :"Dark Mode"}</span>
                    </button>
                </ul>
                
                
                <button className=' ' data-aos="fade-down" data-aos-delay="400" onClick={() => setDarkMode(!darkMode)}>

                    <i class={`text-2xl ${!darkMode ? "fas fa-moon " : "fas fa-sun"}`} ></i>
                </button>
                <a href={resume} target='_blank' className={`${darkMode ? "px-6 py-1 bg-gradient-to-r from-transparent to-blue font-bold rounded-lg text-[lightgray]" : "px-6 py-3  bg-[black] font-bold rounded-lg text-[lightgray]"}`}>Resume</a>
               
                <button className='text-2xl cursor-pointer mr-2 md:hidden' onClick={()=>setOpen(!open)}>
                {!open?<i className='fas fa-bars'></i>:
                <i className='fas fa-xmark'></i>}
                </button>
            </div>

        </div>
    )
}

export default Navbar2
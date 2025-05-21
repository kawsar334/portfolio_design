


import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../context/ThemeContext';
import LinkBar from './LinkBar';
export const Footer = () => {

  const sections = ["Home", "About",  "Projects", "Contact"];
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (

    <div className={darkMode ? 'bg-[rgba(0,0,0,0.3)] mt-[200px] w-full flex justify-center items-center flex-col p-8' : 'bg-secondary text-white mt-[200px] w-full flex justify-center items-center flex-col p-8'}>
      <div className='w-[100%] md:w-[90%] m-auto my-5  flex  justify-center items-start md:items-center  flex-col border-b border-[rgba(255,255,255,0.1)] pb-7'>
        <h1 className=' text-3xl my-5'data-aos="fade-down">Kawsar firoz</h1>
        <p className='' data-aos="fade-up">Copyright © 2025 - All right reserved by Me</p>
      </div>

      <div className="footer  text-neutral-content md:p-10 text-center flex flex-col md:flex-row justify-between md:items-center md:w-[60%] w-[100%] ">
        <nav>
          <h6 className="footer-title " data-aos="fade-down">Links</h6>

          {sections?.map((i)=>(
            <a href={`#${i}`} className="link link-hover" data-aos="fade-down" data-aos-delay="100">{i}</a>
          ))}
      
        </nav>
        <nav>
          <h6 className="footer-title " data-aos="fade-up">Social Media</h6>
          <Link to="https://www.linkedin.com/in/kawsarfiroz11/" target="_blank" className="link link-hover" data-aos="fade-up" data-aos-delay="100">LinkedIn</Link>
               <Link to="https://github.com/kawsar334" target="_blank" className="link link-hover" data-aos="fade-up" data-aos-delay="200">GitHub</Link>
                <Link to="https://www.facebook.com/profile.php?id=100076935281732" target="_blank" className="link link-hover"  data-aos-delay="300">Facebook</Link>
        </nav>
        <nav>
          <h6 className="footer-title ">Legal</h6>
          <a href="#services" className="link link-hover " data-aos="zoom-in">services</a>
          <Link to="#" className="link link-hover "data-aos="zoom-in">Privacy policy</Link>
          <Link to="#" className="link link-hover ">Cookie policy</Link>
          <LinkBar/>
        </nav>
      </div>
     
    </div>
  )
}

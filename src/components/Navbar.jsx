import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {

  const { darkMode, setDarkMode } = useContext(ThemeContext)

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const List = () => {
    return (
      <>
        <li data-aos="fade-down"><a href='#Home'>Home</a></li>
        <li data-aos="fade-down" data-aos-delay="100"><a href='#About'>About</a></li>
        <li data-aos="fade-down" data-aos-delay="200"><a href='#skill'>Skills</a></li>
        <li data-aos="fade-down" data-aos-delay="300"><a href='#Projects'>Projects</a></li>
        <li data-aos="fade-down" data-aos-delay="400"><a href='#Contact'>Contact</a></li>
        <div data-aos="fade-down" className=' ml-5 flex justify-start items-start cursor-pointer text-2xl ' data-aos-delay="400" onClick={() => setDarkMode(!darkMode)}>
          
      <i class={`${!darkMode ? "fas fa-moon  " : "fas fa-sun"}`} ></i>         
        </div>

      </>
    )
  }

  return (
    <div>
      <div className={`${darkMode ? "navbar fixed top-0 left-0 z-20 bg-transparent firefox:bg-opacity-3 bg-opacity-3 text-white backdrop-filter backdrop-blur-lg" : "navbar fixed top-0 left-0 z-20 bg-secondary firefox:bg-opacity-3 bg-opacity-3 text-white backdrop-filter backdrop-blur-lg"}`}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className={`${darkMode ? "menu menu-sm dropdown-content bg-blue rounded-box z-[1] mt-3 w-52 p-2 shadow" : "menu menu-sm dropdown-content bg-black text-[white] rounded-box z-[1] mt-3 w-52 p-2 shadow"}`}>
              <List />
            </ul>
          </div>
          <a className="btn btn-ghost text-xl   firstletter" data-aos="fade-right">Kawsar</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <List />
          </ul>
        </div>
        <div className="navbar-end mr-10" data-aos="zoom-in">
          <a className={`${darkMode ? "px-6 py-3 bg-gradient-to-r from-transparent to-blue font-bold rounded-lg text-[lightgray]" : "px-6 py-3  bg-[black] font-bold rounded-lg text-[lightgray]"}`}>Resume</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

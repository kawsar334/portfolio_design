import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import shadow from "../assets/shadow.png";
import mypic from "../assets/mee.png"
import banner from "../assets/shadow.png"

import { ThemeContext } from '../context/ThemeContext';

const Banner = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <div
            style={{
                backgroundImage: `url(${shadow})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
            className={`${darkMode ? "w-full h-max  md:h-[130vh]    flex justify-between  items-center flex-col gap-10 bg-transparent text-white py-5 " : "w-full h-[130vh]   flex justify-between  items-center flex-col gap-10 bg-transparent text-black py-5 "}`}
        >
            <div className="flex justify-center items-center   h-[100%] w-full md:w-[80%] my-10   " data-aos="fade-up">
                <div className="flex flex-col-reverse md:flex-row justify-center  items-start md:items-center gap-7 w-[90%] h-full mt-10 p-4 ">
                    <div className="w-full md:w-[50%] flex flex-col justify-center items-start gap-2 md:gap-4  ">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                            <span className="font-extrabold bg-gradient-to-r from-blue via-pink-500 to-red-500 bg-clip-text text-transparent">Professional</span> <br />
                            <span className="text-4xl md:text-5xl lg:text-4xl">Web Developer</span>
                        </h1>
                        <p className="text-lg lg:text-xl mb-6">
                            I'm a passionate <span className="font-bold">Frontend Developer</span> specialized in building exceptional digital experiences using React, Tailwind CSS, and modern technologies.
                        </p>
                        <button className={`${darkMode ? "px-6 py-3 bg-gradient-to-r from-transparent to-blue font-bold rounded-lg text-[lightgray]" : "px-6 py-3  bg-[black] font-bold rounded-lg text-[lightgray]"}`}>
                            Get Started
                        </button>
                    </div>
                    <div className='w-full  flex  justify-center items-center mt-[70px] md:mt-0'>
                        <div className="relative w-[200px] md:w-[300px] h-[300px] md:h-[420px]  ">

                            <div className="absolute top-0 left-0 w-full h-full transform rotate-6 z-10 rounded-[30px] hover:rotate-0 transition-transform duration-500 ease-in-out">
                                <img
                                    className="w-full h-full object-cover  rounded-[30px] bg-[white] "
                                    src={mypic}
                                    alt=""
                                />
                            </div>

                            <div className="absolute top-0 left-0 w-full h-full transform hover:-rotate-0 -rotate-6 bg-blue rounded-[30px] transition-transform duration-500 ease-in-out">
                                <img
                                    className="w-full h-full object-cover rounded-[30px]"
                                    src={banner}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


{/* <img
    src={mypic}
    // src="https://www.tebaservices.com/wp-content/uploads/hip-man-1-removebg-preview.png"
    className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full"
    data-aos="zoom-in"
/> */}

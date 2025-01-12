import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import shadow from "../assets/shadow.png";
import mypic from "../assets/mee.png"
import banner from "../assets/shadow.png"

import { ThemeContext } from '../context/ThemeContext';
import LinkBar from './LinkBar';
import  Typed  from 'react-typed';
import resume from "../assets/kawsar-firoz-resume.pdf"

const Banner = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    return (
        <div 
            id='Home'
            style={{
                backgroundImage: `url(${shadow})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
            className={`${darkMode ? "w-full h-max  md:h-[130vh]     flex justify-between  items-center flex-col gap-10 bg-transparent text-white py-5 " : "w-full h-[130vh]   flex justify-between  items-center flex-col gap-10 bg-transparent text-black py-5 "}`}
         >
            <div className="flex justify-center items-center   h-[100%] w-full lg:w-[100%] my-10    " data-aos="fade-up">
                <div className="flex flex-col-reverse md:flex-row justify-center  items-start md:items-center gap-7 w-[97%] h-full mt-10 p-4  ">
                    <div className="w-full md:w-[50%] flex flex-col justify-center items-start gap-2 md:gap-4  ">
                        <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold my-3 ">
                            {/*  */}

                            {/*  */}
                            <span className="">Hi I am </span> <br/>
                            <span className='text-5xl'>kawsar Firoz</span>
                                <br />
                            <span className="font-extrabold bg-gradient-to-r from-blue via-pink-500 to-red-500 bg-clip-text text-transparent text-[20px]">
                                <Typed
                                    strings={[
                                        "I'm a Frontend Developer",
                                        "I Love Building Web Applications",
                                        "Specialized in React.js & MERN Stack",
                                        "Experienced in Responsive Web Design",
                                        "Passionate About Clean & Efficient Code",
                                        "Let's Build Something Amazing Together!",
                                        "Focused on User-Centric Design",
                                        "Open to Freelance & Full-Time Opportunities",
                                    ]}
                                    typeSpeed={60}
                                    backSpeed={40}
                                    loop
                                />
                                </span> 
                        </h1>

                      

                        <p className="text-lg lg:text-xl mb-6 first-letter:text-blue">
                            I'm a passionate <span className="font-bold">Frontend Developer</span> I am a self-motivated and hard-working web developer with knowledge in React, Node, Express.js, MongoDB, JavaScript, HTML, CSS, and responsive web development. I am looking for a challenging position where I can showcase my skills and contribute to the organization's growth. .
                        </p>
                       <div className='flex justify-start items-start flex-col lg:flex-row gap-3'>
                            <a href='#Projects' className={`${darkMode ? "px-3 py-1 text-[14px] bg-gradient-to-r from-transparent to-blue font-bold rounded-lg text-[lightgray]" : "px-3 py-1  text-[14px] bg-[black] font-bold rounded-lg text-[lightgray]"}`}>
                            See work
                            </a>
                            {/* <a 
                            
                                href={resume}
                                 download={resume}
                                rel="noopener noreferrer"
                            className={` ${darkMode ? "px-3 py-1 text-[14px] bg-gradient-to-l from-transparent to-blue font-bold rounded-lg text-[lightgray] transition-all ease-in duration-300 hover:bg-transparent hover:text-blue" : "px-3 py-1  bg-[black] font-bold rounded-lg text-[14px] text-[lightgray] transition-all ease-in duration-300 hover:bg-transparent hover:text-blue"}`}>
                                download resume
                            </a> */}
                            <a
                                href={resume}
                                download="Kawsar_Firoz_Resume.pdf"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                    const confirmDownload = window.confirm("Are you sure you want to download the resume?");
                                    if (!confirmDownload) {
                                        e.preventDefault(); // Prevents the download if the user clicks "Cancel"
                                    }
                                }}
                                className={` ${darkMode
                                        ? "px-3 py-1 text-[14px] bg-gradient-to-l from-transparent to-blue font-bold rounded-lg text-[lightgray] transition-all ease-in duration-300 hover:bg-transparent hover:text-blue"
                                        : "px-3 py-1  bg-[black] font-bold rounded-lg text-[14px] text-[lightgray] transition-all ease-in duration-300 hover:bg-transparent hover:text-blue"
                                    }`}
                            >
                                Download Resume
                            </a>

                       </div>
                       <div className='mt-10'>

                        <LinkBar/>
                       </div>
                    </div>
                    <div className='w-full md:w-[43%]  flex   justify-center items-center mt-[70px] md:mt-0'>
                        <div className="relative w-[200px] h-[200px] md:w-[250px] md:h-[250px]  lg:w-[300px]  lg:h-[420px]  ">

                            <div className="absolute top-0 left-0 w-full h-full transform rotate-6 z-10 rounded-[30px] hover:rotate-0 transition-transform duration-500 ease-in-out">
                                <img
                                    className="w-full h-full object-cover rounded-full lg:rounded-[30px] bg-[white]  border-[2px] md:border-none border-blue"
                                    src={mypic}
                                    alt=""
                                />
                            </div>
                            

                            <div className="absolute top-0 left-0 w-full h-full transform hover:-rotate-0 -rotate-6 bg-blue rounded-full lg:rounded-[30px] transition-transform duration-500 ease-in-out">
                                <img
                                    className="w-full h-full object-cover rounded-full lg:rounded-[30px]"
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

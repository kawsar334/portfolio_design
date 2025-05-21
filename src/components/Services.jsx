import React, { useContext, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { ThemeContext } from '../context/ThemeContext';
import Marquee from './marque/Marquee';
import { frontend } from '../data/Info';

import "./component.css"
import DesignModal from './modals/DesignModal';
import Tittle from './Tittle';

const Services = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const [modal, setModal ] =useState(true)
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);
    const services = [
        {
            id: 1,
            title: 'Frontend Development',
            description: 'Building responsive and user-friendly web interfaces using React.js and Tailwind CSS.',
            icon: 'fas fa-code',
        },
        {
            id: 2,
            title: 'Backend Development',
            description: 'Creating robust and scalable server-side applications with Node.js and Express.',
            icon: 'fas fa-server',
        },
        {
            id: 3,
            title: 'UI/UX Design',
            description: 'Designing intuitive and visually appealing user interfaces for web applications.',
            icon: 'fas fa-palette',
        },
        {
            id: 4,
            title: 'Mobile application Design',
            description: 'Designing intuitive and visually appealing user interfaces for mobile applications. using react native expo cli',
            icon: 'fas fa-mobile-alt',
        },
    ];

  

    return (
        <div id='services' className="bg-transparent py-10 mx-auto w-[85%]  flex justify-center items-center flex-col">
            <Tittle text="Services"/>
            <div className="w-full mx-auto px-6  ">
                <div className="flex flex-col w-[80%] m-auto justify-center items-center gap-2">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="border-b-[2px] border-blue transition-shadow duration-300 w-full flex justify-between items-start py-5 flex-col md:flex-row"
                            data-aos="fade-up" // AOS animation effect
                            data-aos-delay={`${index * 100}`} // Delay each animation by 100ms for better effect
                        >
                            <div className="text-blue-500 text-2xl mb-4 flex justify-start items-center text-blue w-full md:w-[35%] gap-4">
                                <p className="">0{index + 1}.</p>
                                <h3 className="font-semibold text-center">{service.title}</h3>
                            </div>
                            <div className="w-full md:w-[35%]">
                                <p className="text-[14px]">{service.description}</p>
                            </div>
                            <span
                                className={
                                    service.id === 1
                                        ? 'bg-blue text-[white] font-bold text-3xl transform rotate-[270deg] p-1 rounded hidden md:flex'
                                        : 'text-blue font-bold text-3xl transform rotate-[270deg] p-1 rounded hidden md:flex'
                                }
                            >
                                ↘︎
                            </span>
                        </div>
                    ))}
                </div>
                {/* <div className="w-full m-auto flex justify-center items-center my-10">
                    <button
                    onClick={()=>setModal(!modal)}
                    className={` font-bold ${darkMode ? "px-6 py-3 bg-gradient-to-r from-transparent to-blue  rounded-lg text-[lightgray]" : "px-6 py-3  bg-[black]  rounded-lg text-[lightgray] "} `}>
                        <span className='mr-2'>
                        See UI/UX Designs.
                        </span>
                        <i className="fas fa-arrow-right transform -rotate-[30deg]"></i>
                    </button>
                </div>

                {modal &&<div className='fixed top-0 left-0 w-full h-screen bg-[hsla(0,0%,0%,1)] p-8 z-50  flex  gap-4 flex-col  '>
                    <div className=' w-[100%] md:w-[90%]  bg-blue text-white h-screen mx-auto overflow-y-auto rounded px-4'>
                        <div className='sticky top-0 my-3   px-3 py-1 cursor-pointer  flex justify-between items-center  w-[100%] md:w-[90%] mx-auto ' >
                            <h1 className=' text-xl text-center '>UI/UX Designs </h1>
                            <button className="bg-red-400 rounded  px-3 py-1 hover:bg-red-600  transition-all duration-500" onClick={() => setModal(!modal)}>close</button> 
                            </div>
                        <div className='flex justify-center items-center flex-wrap gap-4 w-full   p-4'>
                            {frontend?.slice(0, 6).map((item) => (
                                <div className='parrentcard w-full md:w-[40%] lg:w-[30%] border-2 relative    rounded p-1 overflow-hidden'>
                                    <img className='w-full h-[200px] object-cover ' src={item?.img} alt="" />
                                    <div className='childrenCard absolute  w-full h-full left-0 top-0 bg-blue flex justify-start items-start flex-col  p-4 gap-3 ' >
                                        <h1 className='text-black'>{item?.title}</h1>
                                        <p className='first-letter:text-black first-letter:text-2xl'>{item?.desc.slice(0,70)}...</p>
                                        <a href={item.demo} target='_blank' className='border bg-black px-3 py-1 block w-full rounded  text-center'>Demo</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                  </div>
                    
                </div>} */}

                <DesignModal text ="See Ui/ux design"/>
            </div>
        </div>
    );
};

export default Services;

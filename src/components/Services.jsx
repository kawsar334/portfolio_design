import React, { useContext, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { ThemeContext } from '../context/ThemeContext';
import Marquee from './marque/Marquee';

const Services = () => {
    const { darkMode, setDarkMode } = useContext(ThemeContext)
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
        // {
        //     id: 4,
        //     title: 'Mobile application Design',
        //     description: 'Designing intuitive and visually appealing user interfaces for mobile applications.',
        //     icon: 'fas fa-mobile-alt',
        // },
    ];

  

    return (
        <div className="bg-transparent py-10">
                <h2 className="text-4xl font-bold text-center my-[100px]">Services</h2>
            <div className="max-w-7xl mx-auto px-6">
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
                <div className="w-full m-auto flex justify-center items-center my-10">
                    <a href="#Projects" className={`${darkMode ? "px-6 py-3 bg-gradient-to-r from-transparent to-blue font-bold rounded-lg text-[lightgray]" : "px-6 py-3  bg-[black] font-bold rounded-lg text-[lightgray]"}`}>
                        See My Works
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Services;

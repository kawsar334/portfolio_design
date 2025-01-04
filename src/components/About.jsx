// import React, { useContext, useEffect } from 'react'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import { ThemeContext } from '../context/ThemeContext'

// const About = () => {
//   const { darkMode, setDarkMode } = useContext(ThemeContext)
//   const data = [
//     { id: 1, title: "kawsarfiroz11@gmail.com", name: "Email" },
//     { id: 2, title: "+966509325731", name: "Phone" },
//     { id: 3, title: "Taif, Saudi Arabia", name: "Address" },
//     { id: 4, name: "Follow" }
//   ]
//   useEffect(() => {
//     AOS.init({ duration: 1000, once: true });
//   }, []);


//   return (
//     <div id='About'>
//       <section id="about" className={`${darkMode ? "bg-transparent text-white py-12 px-6 md:px-16" : "bg-transparent text-[gray] py-12 px-6 md:px-16"}`}>
//         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
//           <div className="flex-shrink-0" data-aos="fade-down">
//             <img
//               src="https://www.mysoluta.com/hs-fs/hubfs/Main%20Website%20images%20(26)-1.png?width=500&height=482&name=Main%20Website%20images%20(26)-1.png"
//               alt="About Me"
//               className="rounded-lg shadow-lg w-full md:w-80"
//             />
//           </div>
//           <div className="text-left md:text-left" data-aos="fade-up">
//             <h2 className="text-4xl font-bold mb-4">Personal Info</h2>
//             <p className={`${darkMode?"text-lg mb-6":"text-lg mb-6 text-[gray]"}`}>
//               I'm a passionate frontend developer specializing in React.js and the MERN stack.
//               I love creating interactive and visually appealing web applications. I have experience
//               in building user-friendly, responsive, and dynamic websites.
//             </p>
//             <p className={`${darkMode?"text-lg mb-6":"text-lg mb-6 text-[gray]"}`}>
//               My goal is to deliver high-quality solutions and continuously improve my skills to stay
//               updated with the latest trends in web development.
//             </p>
//             <div className='flex justify-center items-center w-full flex-wrap gap-6 py-5'>
//               {data.map((item) => (
//                 <div key={item.id} className="card bg-primary md:w-[45%] h-[120px] p-4 w-[95%]" data-aos="fade-down">
//                   <div className="flex flex-col justify-start items-start gap-3">
//                     <h2 className="card-title">{item.name}</h2>
//                     <p>{item.title}</p>
//                     {item.id === 4 && (
//                       <div className='flex justify-center items-center gap-4'>
//                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                           <i className="fab fa-facebook text-4xl" style={{ color: "#4267B2" }}></i>
//                         </a>
//                         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                           <i className="fab fa-linkedin text-4xl" style={{ color: "#0077B5" }}></i>
//                         </a>
//                         <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
//                           <i className="fab fa-github text-4xl" style={{ color: "#fff" }}></i>
//                         </a>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className='w-full flex justify-center items-center my-4'>
//           <a href='#Contact' className='w-max px-5 py-1 border-blue text-blue border rounded inline-block align-center hover:bg-blue hover:text-white'>
//             Contact us
//           </a>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default About


import React from "react";
import mypic from "../assets/mee.png"

const AboutUs = () => {
  return (
    <section className=" py-16 px-4" id="About">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold  text-center mb-8">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={mypic} 
              alt="Kawsar Firoz"
              className="rounded-full      w-[300px] md:w-[380px]"
            />
          </div>
          {/* Right Section: Content */}
          <div>
            <p className="text-lg  mb-4">
              Hi, I am <strong>Kawsar Firoz</strong>, a frontend web developer with a passion for creating intuitive and visually appealing web experiences.
            </p>
            <p className="text-lg  mb-4">
              My programming journey began with a desire to build solutions that make a difference. I enjoy working on challenging projects, learning new technologies, and collaborating with teams to create impactful applications.
            </p>
            <p className="text-lg ">
              Outside of programming, I love exploring new hobbies like gaming, drawing, and learning about innovative technologies. I believe in lifelong learning and am always excited to take on new challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


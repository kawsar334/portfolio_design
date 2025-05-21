


import React from "react";
import "./about.css"
import img1 from "../../assets/1.png"
import img2 from "../../assets/2.png"

import about from "../../assets/about.png"
import Tittle from "../Tittle";

const AboutUs = () => {
  return (
    <section className=" w-full py-16 px-4 " id="About">

      <div className="w-[96%] mx-auto">
        <Tittle text="About Me"/>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center ">
          <div className="flex justify-center">
            <div class="slider">
              <img src={img1} class="img img1 w-[400px] md:w-[580px]  bg-gradient-to-b shadow rounded from-blue to-transparent" />
              <img src={about} class="img img2 w-[400px] md:w-[580px]  bg-gradient-to-b shadow rounded from-blue to-transparent" />
              <img src={img2} class="img img3 bg-gradient-to-b shadow rounded from-blue to-transparent" />
            </div>
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


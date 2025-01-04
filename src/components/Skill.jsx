import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS CSS

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  const skills = [
    {
      category: 'Frontend',
      items: [
        { name: 'HTML5', badge: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white' },
        { name: 'CSS3', badge: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white' },
        { name: 'SASS', badge: 'https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=white' },
        { name: 'TailwindCSS', badge: 'https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white' },
        { name: 'Disyui', badge: 'https://img.shields.io/badge/Disyui-FF2D20?style=for-the-badge&logo=disyui&logoColor=white' },
        { name: 'JavaScript', badge: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black' },
        { name: 'React', badge: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
        { name: 'Redux', badge: 'https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white' },
        { name: 'Redux Toolkit', badge: 'https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white' },
        // { name: 'Bootstrap', badge: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white' },

      ],
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', badge: 'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white' },
        { name: 'Express.js', badge: 'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white' },
    
      ],
    },
    {
      category: 'Databases',
      items: [
        { name: 'MongoDB', badge: 'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white' },
      ],
    },
    {
      category: 'Other Tools',
      items: [
        { name: 'Git', badge: 'https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white' },
        { name: 'GitHub', badge: 'https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white' },
      
        { name: 'JWT', badge: 'https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white' },
        { name: 'Postman', badge: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white' },
      ],
    },
    // {
    //   category: 'Basic knowledges',
    //   items: [
    //     { name: 'Bootstrap', badge: 'https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white' },
    //     { name: 'Next.js', badge: 'https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white' },
    //     { name: 'React Native', badge: 'https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB' },
    //     { name: 'MySQL', badge: 'https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white' },
    //     { name: 'PHP', badge: 'https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white' },
    //     { name: 'Laravel', badge: 'https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white' },
    //   ],
    // },
  ];


  return (
    <div className='w-full flex justify-center items-center my-10 py-10 ' id='skill'>
      <div className="bg-transparent py-10 px-6 w-full md:w-[70%] m-auto  flex justify-center items-center flex-col">
        <div className="w-full mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8" data-aos="fade-up">Skills</h2>
          {skills.map((skill, index) => (
            <div key={index} className="mb-4" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <h3 className="text-2xl font-semibold mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-3 ">
                {skill.items.map((item, idx) => (
                  <img key={idx} src={item.badge} alt={item.name} data-aos="zoom-in" className='rounded-full' data-aos-delay={`${(idx + 1) * 100}`} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

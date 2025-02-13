import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import About from '../components/About'
import Marquee from '../components/marque/Marquee'
import Services from '../components/Services'
import LinkBar from '../components/LinkBar'
import Education from '../components/Education'



const Home = () => {
 
    return (
        <div id='home' className='relative'>

             <Banner /> 
             <Skill/>
            <Projects/>
            <About/>
            <Services />
            
             <Contact/> 
            {/* <Education/> */}

        </div>
    )
}

export default Home

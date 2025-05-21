import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import About from '../components/about/About'
import Marquee from '../components/marque/Marquee'
import Services from '../components/Services'
import LinkBar from '../components/LinkBar'
import Education from '../components/Education'
import MouseEffect from '../components/Mouse'
import Button from '../components/navbar2/buttons/Button'



const Home = () => {

    return (
        <div id='home' className='relative'>
            {/* <Button/> */}
            <MouseEffect />
            <Banner />
            <Skill />
            <Projects />
            <About />
            <Services />

            <Contact />
            {/* <Education/> */}

        </div>
    )
}

export default Home

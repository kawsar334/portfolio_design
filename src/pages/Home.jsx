import React from 'react'
import Banner from '../components/Banner'
import Contact from '../components/Contact'
import Skill from '../components/Skill'
import Projects from '../components/Projects'
import About from '../components/About'
import Marquee from '../components/marque/Marquee'
import Services from '../components/Services'
// import SecondNav from '../assets/SecondNav'


const Home = () => {
    return (
        <div id='home' className=''>

            {/* <SecondNav/> */}
             <Banner /> 
            {/* <Marquee/>  */}
            
             <Skill/>
            <Services />
            <Projects/>
            <About/>
            
             <Contact/> 

        </div>
    )
}

export default Home

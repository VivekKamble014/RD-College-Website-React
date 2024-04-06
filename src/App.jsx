import React, { useState } from 'react';

import About from "./Components/About/About"
import Compus from "./Components/Campus/Compus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer"

function App () {

  const [playState, SetPlayState ] = useState(false); // Import useState


  return (

    <>
      <div>
      <Navbar/>
      <Hero/>
      <div className="cont">
      <Title subTitle='Our PROGRAMS' title='What We Offer'/>
      <Programs/>
      <About SetPlayState={SetPlayState }/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Compus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='CONTACT US' title='Get in touch'/>
      <Contact/>
      <Footer/>
      </div>
      <VideoPlayer playState={playState} SetPlayState ={SetPlayState }/>
      </div>
      
    </>
  )
}

export default App

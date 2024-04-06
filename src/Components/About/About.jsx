import React from 'react'
import "./About.css"
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


const About = ({SetPlayState }) => {
  return (
    <div className='about '>
    <div className='about-left'>
        <img src={about_img} className="about-img"/>
        <img src={play_icon} className="play-icon" onClick={()=>{SetPlayState (true)}} />
    </div>
    <div className='about-right'>
        <h3>ABOUT COLLEGE</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>Welcome to RD College, where we pride ourselves on offering a comprehensive range of academic programs to suit every student's needs.</p>
        <p>From undergraduate degrees that lay the foundation for your career to postgraduate and master's programs that delve deeper into specialized fields, we are committed to providing high-quality education that prepares you for success.</p>
        <p>At RD College, our dedicated faculty and state-of-the-art facilities ensure that you receive a well-rounded education that equips you with the knowledge, skills, and confidence to excel in your chosen profession.</p>

    </div>
    </div>
  )
}

export default About
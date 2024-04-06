import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero cont'>
        <div className='hero-text'>
            <h1>Build Your Future With Us</h1>
            <p>
                Welcome to our college website, your gateway to academic excellence and vibrant campus life! Explore our diverse range of programs designed to cultivate critical thinking, innovation, and leadership skills. Discover our dedicated faculty members who are committed to nurturing your intellectual curiosity and supporting your personal growth.</p>
                <button className='btn'>Explore More <img src={dark_arrow} alt=""/></button>
        </div>
    </div>
  )
}

export default Hero
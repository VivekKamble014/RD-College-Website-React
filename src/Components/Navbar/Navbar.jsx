import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-scroll'; // Import Link from react-scroll

import './Navbar.css'

import menue_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const[sticky, setSticky]=useState(false);

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })

  },[])

const [mobileMenu, setMobileMenu]= useState(false);

  const toggleMenu =()=>{
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);

  }
  return (
    <nav className={`cont ${sticky? 'dark' : ''}`}>
        <img src={logo} alt='logo' className='logo'/>
        <ul className={mobileMenu?'': 'hide-mobile-menu'}>
            <li><Link to="hero" smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to="program" smooth={true} offset={-260} duration={500} >Program</Link></li>
            <li><Link to="about" smooth={true} offset={-150} duration={500} >About us</Link></li>
            <li><Link to="campus" smooth={true} offset={-260} duration={500} >Campus</Link></li>
            <li><Link to="Testimonials" smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
            <li><Link to="contact" smooth={true} offset={-230} duration={500} className='btn'>Contact us</Link></li>
        </ul>
        <img src={menue_icon} alt='' className='menu-icon ' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
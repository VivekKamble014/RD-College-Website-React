import React from 'react'
import './Contact.css'

import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import lication_icon from '../../assets/location-icon.png'

const Contact = () => {


    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "4e0b5694-55ac-4aad-975b-58f97f73e3fd");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };



  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a Message <img src={msg_icon} alt=""/></h3>
            <p>
            Contact us at RD College, where our friendly staff are ready to help. Whether you're an aspiring student eager to learn more about our programs, a current student seeking support, or an alumni looking to reconnect, we're here for you. Reach out via phone, email, or visit us in person at our convenient location.
            </p>
            <ul>
                <li> <img src={mail_icon} alt=""/> mrvivekkamble8@gmail.com</li>
                <li> <img src={phone_icon} alt=""/>+91 7709629488</li>
                <li> <img src={lication_icon} alt=""/>Tasgaon, sangli, <br/>Maharashtra- 416312 , India</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type='text' name="name" placeholder='Enter Your Name' required/>
                <label>Phone Number</label>
                <input type='tel' name="phone" placeholder='Enter Your Mobile No' required/>
                <label>Write Your Message here</label>
                <textarea name="message" rows='6' placeholder='Enter Your Message' required/>
                <button type='submit' className='btn dark-btn'>Submit Now</button>
            </form> 
            <span >{result}</span>
        </div>
    </div>
  )
}

export default Contact
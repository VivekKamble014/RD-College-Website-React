import React, { useRef } from 'react'
import "./Testimonials.css"
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider= useRef();
    let tx=0;

    const slideForward=()=>{

        if(tx > -50){
            tx-= 25;

        }
        slider.current.style.transform= `translateX(${tx}%)`;

    }
    const slideBackward=()=>{
        if(tx < 0){
            tx+= 25;

        }
        slider.current.style.transform= `translateX(${tx}%)`;

    }

  return (
    <div className='Testimonials'>
    <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>

    <img src={back_icon} alt='' className='back-btn' onClick={slideBackward}/>

    <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt=''/>
                        <div>
                            <h3>Siddhika Mulani</h3>
                            <span>Sangli, 416416</span>

                        </div>
                        
                    </div>
                    <p>Share your experience with RD College! Your feedback helps us continually improve and provide the best possible education and support to our students.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt=''/>
                        <div>
                            <h3>Vivek Kamble</h3>
                            <span>Sangli, Tasgaon</span>

                        </div>
                    </div>
                        <p>Share your experience with RD College! Your feedback helps us continually improve and provide the best possible education and support to our students.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt=''/>
                        <div>
                            <h3>Chaitanya Kashid</h3>
                            <span>Jath, Sangli</span>

                        </div>
                    </div>
                        <p>Share your experience with RD College! Your feedback helps us continually improve and provide the best possible education and support to our students.</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4} alt=''/>
                        <div>
                            <h3>Mayur Gawali</h3>
                            <span>Sangli, Tasgaon</span>

                        </div>
                    </div>
                        <p>Share your experience with RD College! Your feedback helps us continually improve and provide the best possible education and support to our students.</p>
                </div>
            </li>
        </ul>
    </div>
    </div>
  )
}

export default Testimonials
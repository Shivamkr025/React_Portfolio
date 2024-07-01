import React from 'react'
import img from '../../assets/image05.jpeg'
import './About.css'

function About() {
    return (
        <div className='about-container pt-4'>
            <h1 className='text-center'>About</h1>
            <div className="container about-Container">
            <h3 className=''> 🌟 Passionate Web Developer Creating Engaging Experiences.</h3>

                <div className="row ">
                    <div className="col-md-4 text-center">
                        <img src={img} alt="Profile Image" className="img-fluid img-box mt-4 about-img" />
                    </div>
                    <div className="col-md-7">
                        <p className='pt-4 about-para'>Greetings! 🌟<br />
                        I have recently completed my journey as a MERN Stack Developer and am excited to join a company where I can improve my skills and contribute to projects. With knowledge in MongoDB, Express.js, React.js, and Node.js, I am ready to help build and maintain web applications. I am looking for a friendly and innovative workplace where I can continue to learn and grow while making a positive impact.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

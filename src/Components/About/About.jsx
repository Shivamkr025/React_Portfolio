import React from 'react'
import img from '../../assets/image05.jpeg'
import './About.css'

function About() {
    return (
        <div className='about-container'>
            <h1 className='text-center'>About</h1>
            <div className="container about-Container">
            <h3 className=''> 🌟 Passionate Web Developer Creating Engaging Experiences.</h3>

                <div className="row ">
                    <div className="col-md-4 text-center">
                        <img src={img} alt="Profile Image" className="img-fluid img-box mt-4 about-img" />
                    </div>
                    <div className="col-md-7">
                        <p className='pt-4 about-para'>Greetings! 🌟<br />
                        I'm Shivam, currently wrapping up my B.Com degree and fresh out of an intensive web development course at Hyper Verge Academy. I specialize in crafting responsive websites and dynamic web applications. Driven by a passion for impactful solutions,I thrive on creating engaging user experiences and innovative applications. Beyond coding, I find joy in traditional photography, cricket, and music. Eager to learn and explore, I'm ready to bring excellence to your team!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

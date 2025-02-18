import React from 'react';
import './Home.css'


function Home() {

    return (
        <div className="home-mainContainer ">
            <div className="row align-items-center justify-content-end home-container">
                <div className="col-md-5 text-md-left text-Container text-align-justify" >
                        <p className='hii'>Hello,</p>
                        <p className='home-name'>I'm Shivam Kumar <span className='my-name'>a Web Developer!</span></p>
                        <p className='home-para'>Welcome to my portfolio! This site, created using React, showcases my work as a web developer. I enjoy crafting visually appealing and user-friendly websites using the MERN Stack.</p>

                    <div className="d-flex justify-content-md-start justify-content-center">
                        <a href="https://github.com/Shivamkr025" target="_blank" rel="noopener noreferrer" className="me-2">
                            <button className="btn home-btn">
                                <i className="bi bi-github home-icon"></i>
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/shivam-kumar-b2827b242/" target="_blank" rel="noopener noreferrer" className="me-2">
                            <button className="btn home-btn">
                                <i className="bi bi-linkedin home-icon"></i>
                            </button>
                        </a>
                        <a href="https://www.instagram.com/mr_shivam_k07/?igsh=MTY5bXFjaW1wcWx3dw%3D%3D" target="_blank" rel="noopener noreferrer" className="me-2">
                            <button className="btn home-btn">
                                <i className="bi bi-instagram home-icon"></i>
                            </button>
                        </a>
                        <a href="https://drive.google.com/file/d/1_lmdEdMdBDWE2gPMW4xByRSRNmEJ6oC_/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="me-2">
                            <button className="btn home-btn">
                                <i className="bi bi-file-earmark-text home-icon"></i>
                            </button>
                        </a>
                        
                    </div>
                </div>
                <div className="col-md-6 text-center">
                </div>
            </div>
        </div>

    );
}

export default Home;

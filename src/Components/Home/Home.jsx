import React, { useState } from 'react';
import './Home.css'


function Home() {

    return (
        <div className="home-mainContainer ">
            <div className="row align-items-center justify-content-end home-container">
                <div className="col-md-5 text-md-left text-Container text-align-justify" >
                    <p className='hii'>Hii,</p>
                    <p className='home-name'>I am <span className='my-name'>Shivam Kumar</span></p>
                    <h1 className='home-dev'>I'm a <span className='home-developer'> Developer!</span></h1>
                    <p className='home-para'>I'm Shivam Kumar, a web developer. This portfolio you're exploring is my creation, made with React. I enjoy crafting visually appealing and user-friendly websites using MERN Stack .</p>

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
                        <a href="https://drive.google.com/file/d/1qUH80e2Bl6WHDXEMKfA8osnMD3_dZ84i/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="me-2">
                            <button className="btn home-btn">
                                <i className="bi bi-file-earmark-person home-icon"></i>
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

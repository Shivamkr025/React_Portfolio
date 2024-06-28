import React from 'react';
import img from '../../assets/image01.jpeg';
import './Home.css'

function Home() {
    return (
        <div className="home-mainContainer mb-4">
            <div className="row align-items-center home-container">
                <div className="col-md-6 text-center text-md-left text-Container">
                    <p>Hill, I am Shivam Kumar</p>
                    <h1>I'm a Developer!</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <button className="btn home-btn"><i class="bi bi-github home-icon" ></i></button>
                    <button className="btn home-btn"><i class="bi bi-linkedin home-icon"></i></button>
                    <button className="btn home-btn"><i class="bi bi-instagram home-icon"></i></button>
                    <button className="btn home-btn"><i class="bi bi-file-earmark-person home-icon"></i></button>
                    <button className="btn home-btn"><i class="bi bi-chat-right-text-fill home-icon"></i></button>
                </div>
                <div className="col-md-6 text-center">
                    <img src={img} alt="Profile Image" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default Home;

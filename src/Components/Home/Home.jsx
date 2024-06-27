import React from 'react';
import img from '../../assets/image01.jpeg';
import './Home.css'

function Home() {
    return (
        <div className="container">
            <div className="row align-items-center home-container">
                <div className="col-md-6 text-center text-md-left">
                    <p>Hill, I am Shivam Kumar</p>
                    <h1>I'm a Developer!</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <button className="btn btn-primary">Resume</button>
                </div>
                <div className="col-md-6 text-center">
                    <img src={img} alt="Profile Image" className="img-fluid" />
                </div>
            </div>
        </div>
    );
}

export default Home;

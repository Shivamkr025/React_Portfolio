import React, { useEffect } from 'react';
import './Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import movieSite from '../../assets/movieSite.png';
import consult from '../../assets/consult.png';
import trivia from '../../assets/triviaBattle.png';
import blog from '../../assets/blogApp.png';
import eShop from '../../assets/eShop2.png';
import nodeMaller from '../../assets/nodeMaller.png';

function Project() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        });
    }, []);

    let projectDetail = [
        {
            imgLink: movieSite,
            paragraph: "Movies Theather Application",
            deployLink: "https://sk025movieplex.netlify.app/",
            sourceCode: "https://github.com/Shivamkr025/securityBoat_assignment",
        },
        {
            imgLink: blog,
            paragraph: "Blog Website.",
            deployLink: "https://inspireblogkr025.netlify.app/",
            sourceCode: "https://github.com/Shivamkr025/Blog-app_Bharat-Intern.git",
        },
        {
            imgLink: trivia,
            paragraph: "Trivia Battle Game ",
            deployLink: "https://sk025-trivia-battle.netlify.app/",
            sourceCode: "https://github.com/Shivamkr025/HVA_Hackathon_4.0",
        },
        {
            imgLink: consult,
            paragraph: "React Design",
            deployLink: "https://shivamkr025consult.netlify.app/",
            sourceCode: "https://github.com/Shivamkr025/React_project/tree/main/BusinessProject",
        },
        {
            imgLink: eShop,
            paragraph: "Still working on this project",
            sourceCode: "https://github.com/Shivamkr025/React_project/tree/main/E-Shop_app",
        },
        {
            imgLink: nodeMaller,
            paragraph: "Node-Maller Backend Project.",
            sourceCode: "https://github.com/Shivamkr025/Node-Maller_02",
        },
    ];

    return (
        <div className="project-mainContainer pt-4">
            <h1 className="text-center">Project</h1>
            <div className="container">
                <h3 className="pb-4">🌟 Explore my projects to see how I've enhanced my skills.</h3>
                <div className="row justify-content-center">
                    {projectDetail.map((item, index) => (
                        <div
                            className="col-md-4 movie-div m-2"
                            key={index}
                            style={{ maxWidth: '400px' }}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="card mb-2">
                                <img src={item.imgLink} className="card-img-top mb-0" alt="Card image cap" style={{ height: '230px' }} />
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <a href={item.sourceCode} className="btn mr-2 p-github" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-github p-icon"></i>
                                </a>
                                <a href={item.deployLink} className="btn mr-2 p-source" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                                    <i className="bi bi-link-45deg p-icon"></i>
                                </a>
                                <p className="card-text mb-0" style={{ marginLeft: '10px' }}>{item.paragraph}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Project;

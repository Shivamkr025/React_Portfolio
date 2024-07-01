import React from 'react';
import './Project.css'
import movieSite from '../../assets/movieSite.png'
import consult from '../../assets/consult.png'
import news from '../../assets/newsApp.png'
import books from '../../assets/bookLibrary.png'
import eShop from '../../assets/eShop2.png'
import nodeMaller from '../../assets/nodeMaller.png'

function Project() {

    let projectDetail = [
        {
            imgLink: movieSite,
            paragraph: "MERN Stack Project",
            deployLink: "https://sk025movieplex.netlify.app/",
            sourceCode: "https://sk025movieplex.netlify.app/"
        },
        {
            imgLink: consult,
            paragraph: "React Design",
            deployLink: "https://shivamkr025consult.netlify.app/",
            sourceCode: "https://shivamkr025consult.netlify.app/"
        },
        ,
        {
            imgLink: eShop,
            paragraph: "Still working on this project",
            sourceCode: "https://github.com/Shivamkr025/React_project/tree/main/E-Shop_app"
        }
        ,
        {
            imgLink: news,
            paragraph: "JavaScript News Application",
            sourceCode: "https://github.com/Shivamkr025/news_application"
        }
        ,
        {
            imgLink: books,
            paragraph: "Book Library .",
            sourceCode: "https://github.com/Shivamkr025/React_project/tree/main/bookLibrary"
        },
        {
            imgLink: nodeMaller,
            paragraph: "Node-Maller Backend Project.",
            sourceCode: "https://github.com/Shivamkr025/Node-Maller_02"
        }
    ];

    return (
        <div className='project-mainContainer pt-4'>
            <h1 className="text-center">Project</h1>
            <div className="container">
                <h3 className='pb-4'>🌟 Explore my projects to see how I've enhanced my skills.</h3>
                <div className="row justify-content-center">
                    {projectDetail.map((item, index) => (
                        <div className="col-md-4 movie-div m-2" key={index} style={{ maxWidth: '400px', }}>
                            <div className="card mb-2 ">
                                <img src={item.imgLink} className="card-img-top mb-0" alt="Card image cap" style={{ height: '230px' }} />
                            </div>
                            <div className="d-flex align-items-center mb-4">
                                <a href={item.sourceCode} className="btn mr-2 p-github" target="_blank" rel="noopener noreferrer">
                                    <i class="bi bi-github p-icon"></i>
                                </a>

                                <a href={item.deployLink} className="btn mr-2 p-source" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px' }}>
                                    <i class="bi bi-link-45deg p-icon"></i>
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

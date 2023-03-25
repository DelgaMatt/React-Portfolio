import React from 'react';
import '../App.css'
// import beernbites from "../images/beer-n-bites.herokuapp.com_ (1).png"
// import concertcrawler from "../images/ConcertCrawler_.png"


const Project = (props) => {
    return (
        <div className="d-flex justify-content-around flex-wrap mb-4 ">

            {props.projects.map((project) => (

                <div className='project m-4 shadow-lg text-center'>
                    <img src={project.image} alt="Beer'n'Bites" style={{ height: '300px', width: '469PX' }} className="image" />
                    <div className='middle text-white  rounded bg-dark'>
                        <div className='d-flex justfify-content-center align-items-center p-4 '>
                            <a href={project.deployed} target="_blank" rel="noopener noreferrer">
                                <div className="display-6 style-none mx-4 text-light">{project.title}</div>
                            </a>
                            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                                <i className="fa fa-3x fa-github fa-lg mx-4 text-white"></i>
                            </a>
                            <div className='p-2'>
                                {project.description}
                            </div>
                        </div>


                    </div>
                </div>
            ))
            }

        </div>
    );
}

export default Project;
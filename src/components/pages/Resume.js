import React from "react";

const Resume = () => {

    const backgroundColor = {
        backgroundColor: '#474440'
    };

    return (
        <section>
        <div style={backgroundColor} className="jumbotron d-flex vh-100 align-items-center flex-column">
            <h1 className="text-center display-6 p-5 text-light text-decoration-underline">Resume</h1>
            <button className="btn w-25 justify-content-center rounded-pill bg-dark ">
                <a
                    className="text-white"   
                    href={"/resume.pdf"}
                    target="_blank" rel="noreferrer"
                >
                    <span className="icon px-2">
                        <i className="fa fa-download"></i>
                    </span>
                    <span>Download My Resume</span>
                </a>
            </button>
            <section className="mt-5 d-flex justify-content-around text-light text-center w-100 h-100">
                <div className="h-100">
                    <h2 className="text-light display-6 ">Front End Proficiencies</h2>  
                    <ul className="style-none">
                        <li> HTML5</li>
                        <li> CSS3</li>
                        <li>Tailwind</li>
                        <li>Bootstrap</li>
                        <li>jQuery</li> 
                        <li>Javascript</li>
                        <li>Mustache / Handlebars</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className="h-100">
                    <h2 className="text-light display-6 ">Back End Proficiencies</h2>
                    <ul>
                        <li>NodeJS</li>
                        <li>GraphQL</li>
                        <li>Mongoose</li>
                        <li>MongoDB</li>
                        <li>OOP</li>
                        <li>MVC</li>
                        <li>ExpressJS</li>
                        <li>mySQL</li>
                        <li>Sequelize</li>
                        <li>ORM</li>
                        <li>Jest</li>
                        <li>Bcrypt</li>
                    </ul>
                </div>
            </section>
            </div>
        </section>
    )
}

export default Resume;
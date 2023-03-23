import React from "react";

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg w-auto navbar-scroll py-3 px-2 px-lg-6 bg-light shadow-lg ">
            {/* <h1 className="p-2"><a className="navbar-brand" href='#page-top'>Matthew Delgado</a></h1> */}
            <span class="px-4 h1">Matthew Delgado</span>
            <ul className="navbar-nav ms-auto my-2 mx-4 my-lg-0">
                <li className="nav-item"><a className="nav-link" href="#about">About Me</a></li>
                <li className="nav-item"><a className="nav-link" href="#portfolio">Portfolio</a></li>
                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                <li className="nav-item"><a className="nav-link" href="#resume">Resume</a></li>
            </ul>
        </nav>
    )
};

export default Navigation
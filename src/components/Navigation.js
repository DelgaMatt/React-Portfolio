import React from "react";

const Navigation = ({ currentPage, handlePageChange }) => {
    return (
        <ul className="navbar-nav ms-auto my-2 mx-4 my-lg-0 ">
            <li className="nav-item px-2">
                <a  onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                    href="#about">

                    About Me
                </a>
            </li>
            <li className="nav-item px-2">
                <a  onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    href="#portfolio">
                    Portfolio
                </a>
            </li>
            <li className="nav-item px-2">
                <a 
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                    href="#contact">
                    Contact
                </a>
            </li>
            <li className="nav-item px-2">
                <a 
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                    href="#resume">
                    Resume
                </a>
            </li>
        </ul>
    )
};

export default Navigation;
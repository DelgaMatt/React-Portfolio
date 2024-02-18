import React from "react";

const Navigation = ({ currentPage, handlePageChange }) => {
    return (
        <ul className="navbar-nav nav-tabs ms-auto my-2 mx-5 my-lg-0 ">
            <li className="nav-item px-2">
                <a  
                    href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'nav-link active bg-dark' : 'nav-link'}>
                    About Me
                </a>
            </li>
            <li className="nav-item px-2">
                <a  
                    href="#portfolio"
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio' ? 'nav-link active bg-dark' : 'nav-link'}>
                    Portfolio
                </a>
            </li>
            <li className="nav-item px-2">
                <a 
                    href="#contact"
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'nav-link active bg-dark' : 'nav-link'}>
                    Contact
                </a>
            </li>
            <li className="nav-item px-2">
                <a 
                    href="#resume"
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume' ? 'nav-link active bg-dark' : 'nav-link'}>
                    Resume
                </a>
            </li>
        </ul>
    )
};

export default Navigation;
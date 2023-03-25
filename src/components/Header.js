import React from "react";
import Navigation from "./Navigation";

const Header = (props) => {
    const {currentPage, handlePageChange} = props;

    const backgroundColor = {
        backgroundColor: '#4c4444'
    }
    return (
        <nav className="navbar navbar-dark navbar-expand-lg w-auto navbar-scroll py-3 px-2 px-lg-6 shadow-lg text-light" style={backgroundColor}>
            <h1 class="px-5 font-weight-normal h1 display-6">Matthew Delgado</h1>
            <Navigation  currentPage={currentPage} handlePageChange={handlePageChange}/>
        </nav>
    );
};

export default Header;
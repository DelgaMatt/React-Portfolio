import React from "react";
import Navigation from "./Navigation";

const Header = (props) => {
    const {currentPage, handlePageChange} = props;

    const backgroundColor = {
        backgroundColor: '#000000'
    }
    return (
        <nav className="navbar navbar-dark navbar-expand-lg w-auto navbar-scroll px-2 shadow-lg text-light d-flex sm-flex-column border-bottom" style={backgroundColor}>
            <h1 class="px-5 font-weight-normal h1 display-4 ">M.D.</h1>
            <Navigation  currentPage={currentPage} handlePageChange={handlePageChange}/>
        </nav>
    );
};

export default Header;
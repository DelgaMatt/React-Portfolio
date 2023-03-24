import React from "react";
import Navigation from "./Navigation";

const Header = (props) => {
    const backgroundColor = {
        backgroundColor: '#4c4444'
    }
    return (
        <nav className="navbar navbar-dark navbar-expand-lg w-auto navbar-scroll py-3 px-2 px-lg-6 shadow-lg text-light" style={backgroundColor}>
        {/* <h1 className="p-2"><a className="navbar-brand" href='#page-top'>Matthew Delgado</a></h1> */}
            <h1 class="px-5 font-weight-normal h1 display-6">Matthew Delgado</h1>
            <Navigation/>
        </nav>
    );
};

export default Header;
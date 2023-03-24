import React from "react";
import Project from "../Project";

const Portfolio = () => {
    const backgroundColor = {
        backgroundColor: '#474440'
    };

    return (
    <section className="container-fluid p-4 row g-0 text-light" style={backgroundColor}>
        <h1 className="text-center display-6 p-4">Portfolio</h1>
        <Project/>
    </section>
    )
};

export default Portfolio;
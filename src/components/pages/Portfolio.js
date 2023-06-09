import React from "react";
import Project from "../Project";

import sherpagroup from "../../images/sherpa-studios.herokuapp.com_ (3).png"
import beernbites from "../../images/beer-n-bites.herokuapp.com_ (1).png"
import concertcrawler from "../../images/ConcertCrawler_.png"
import jate from "../../images/jate.png";
import weatherdash from "../../images/Weather-Dashboard.png"
import ecomm from "../../images/e-commerce.png"
import socialnet from "../../images/Social-Network-API.png"

const projects = [
    {
        id: 1,
        title: "Sherpa Studios",
        image: sherpagroup,
        description: "MERN Stack Application",
        repo: "https://github.com/imjustSahen/Software-Sherpas",
        deployed: "https://sherpa-studios.herokuapp.com/",
    },
    {
        id: 1,
        title: "Beer'N'Bites",
        image: beernbites,
        description: "Full Stack Application",
        repo: "https://github.com/DelgaMatt/Beer-n-Bites",
        deployed: "https://beer-n-bites.herokuapp.com",
    },
    {
        id: 2,
        title: "Concert Crawler",
        image: concertcrawler,
        description: "Full Stack Application",
        repo: "https://imjustsahen.github.io/ConcertCrawler/",
        deployed: "https://pocket-traders.herokuapp.com/",
    },
    {
        id: 3,
        title: "J.A.T.E",
        image: jate,
        description: "Progressive Web Application",
        repo: "https://github.com/DelgaMatt/Text-Editor-PWA-",
        deployed: "https://text-editor-pwa-2.herokuapp.com/",
    },
    {
        id: 4,
        title: "Weather Dashboard",
        image: weatherdash,
        description: "Front End Application",
        repo: "https://imjustsahen.github.io/ConcertCrawler/",
        deployed: "https://pocket-traders.herokuapp.com/",
    },
    {
        id: 5,
        title: "E-Commerce API",
        image: ecomm,
        description: "Back End Application",
        repo: "https://github.com/DelgaMatt/E-commerce-Back-End",
    },
    {
        id: 6,
        title: "Social Network API",
        image: socialnet,
        description: "Back End Application",
        repo: "https://github.com/DelgaMatt/Social-Network-API",
    },


];

const Portfolio = () => {
    const backgroundColor = {
        backgroundColor: '#333738'
    };


    return (
        <section className="container-fluid p-4 row g-0 text-light" style={backgroundColor}>
            <h1 className="text-center display-6 p-4 text-decoration-underline">Portfolio</h1>
            <Project projects={projects}/>
        </section>
    )
};

export default Portfolio;
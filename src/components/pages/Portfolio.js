import React from "react";
import Project from "../Project";

import sherpagroup from "../../images/sherpa-studios.herokuapp.com_ (3).png"
import beernbites from "../../images/beer-n-bites.herokuapp.com_ (1).png"
import concertcrawler from "../../images/ConcertCrawler_.png"
import satellite from "../../images/satellite.png"
import weatherdash from "../../images/Weather-Dashboard.png"
import mealsapp from "../../images/meals-app.png"
import socialnet from "../../images/Social-Network-API.png"

const projects = [
    {
        id: 1,
        title: "Satellite",
        mobile: true,
        image: satellite,
        description: "Mobile Chat App",
        repo: "https://github.com/DelgaMatt/Satellite-Chat-App",
    },
    {
        id: 2,
        title: "Meals App",
        mobile: true,
        image: mealsapp,
        description: "Mobile Application",
        repo: "https://github.com/DelgaMatt/Meals-App",
    },
    {
        id: 3,
        title: "Sherpa Studios",
        image: sherpagroup,
        description: "MERN Stack Application",
        repo: "https://github.com/imjustSahen/Software-Sherpas",
        deployed: "https://sherpa-studios.herokuapp.com/",
    },
    {
        id: 4,
        title: "Beer'N'Bites",
        image: beernbites,
        description: "Full Stack Application",
        repo: "https://github.com/DelgaMatt/Beer-n-Bites",
        deployed: "https://beer-n-bites.herokuapp.com",
    },
    {
        id: 5,
        title: "Concert Crawler",
        image: concertcrawler,
        description: "Full Stack Application",
        repo: "https://imjustsahen.github.io/ConcertCrawler/",
        deployed: "https://pocket-traders.herokuapp.com/",
    },
    {
        id: 6,
        title: "Weather Dashboard",
        image: weatherdash,
        description: "Front End Application",
        repo: "https://imjustsahen.github.io/ConcertCrawler/",
        deployed: "https://pocket-traders.herokuapp.com/",
    },
    {
        id: 7,
        title: "Social Network API",
        image: socialnet,
        description: "Back End Application",
        repo: "https://github.com/DelgaMatt/Social-Network-API",
    },


];

const Portfolio = () => {
    const backgroundColor = {
        backgroundColor: '#474440'
    };


    return (
        <section className="container-fluid p-4 row g-0 text-light" style={backgroundColor}>
            <h1 className="text-center display-6 p-4 text-decoration-underline">Portfolio</h1>
            <Project projects={projects}/>
        </section>
    )
};

export default Portfolio;
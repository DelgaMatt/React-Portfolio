import React from 'react';
import beernbites from "../images/beer-n-bites.herokuapp.com_ (1).png"
import concertcrawler from "../images/ConcertCrawler_.png"


const Project = () => {
    const imageHover = {
        backgroundColor: 'red',
        opacity: 0.5,
    }

    return (
        <div className="d-flex justify-content-around flex-wrap mb-4 ">
            
                <div className='bg-image hover-overlay'>
                    <img src={beernbites} alt="Beer'n'Bites" style={{height: '300px'}} className="w-100"/>
                    <div className='mask flex-center rgba-red-strong'>
                        <p>heavy overlay</p>
                    </div>
                </div>
           

            <a href="https://imjustsahen.github.io/ConcertCrawler/" className='p-2'>
                <img src={concertcrawler} alt="Concert Crawler" style={{height: '300px'}}/>
            </a>
            <a href="https://beer-n-bites.herokuapp.com" className='p-2'>
                <img src={beernbites} alt="Beer'n'Bites" style={{height: '300px'}}/>
            </a>
            <a href="https://beer-n-bites.herokuapp.com" className='p-2'>
                <img src={beernbites} alt="Beer'n'Bites" style={{height: '300px'}}/>
            </a>
            <a href="https://beer-n-bites.herokuapp.com" className='p-2'>
                <img src={beernbites} alt="Beer'n'Bites" style={{height: '300px'}}/>
            </a>
            <a href="https://beer-n-bites.herokuapp.com" className='p-2'>
                <img src={beernbites} alt="Beer'n'Bites" style={{height: '300px'}}/>
            </a>
        </div>
    );
}

export default Project;
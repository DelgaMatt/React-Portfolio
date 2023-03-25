import React from "react";
import background from '../../images/jeremy-bishop-8xznAGy4HcY-unsplash.jpg';
import portrait from '../../images/IMG_4820.png'

const About = ({currentPage, handlePageChange}) => {
    const backgroundColor = {
        backgroundColor: '#474440'
    };

    return (
        <section className="100vh">
            <div className="bg-image jumbotron d-flex justify-content-center align-items-center "
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '50vh'
                }}>
                        
                <div className="d-flex text-center flex-column">
                    <div className="display-6 text-white m-4">
                        Full Stack Developer ⬩ Artist ⬩ Designer
                    </div>
                    <a href="#portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active bg-dark' : 'nav-link' }
                        >
                        <button className="btn  text-white rounded-pill py-2 px-4 border-light bg-dark ">View my portfolio</button>
                    </a>
                </div>    
            </div>
            <div className="d-flex text-light p-4 align-items-center" style={backgroundColor}>
                <div className="text-center">
                    <h2 className="px-5 pt-4 display-6">About Me</h2>
                    <p className="lead p-4">I learned to find passion in the culture, the community and it’s creativity, 
                        the problem solving, the challenge, the potential for work-life balance and the 
                        promise that there’s always more to learn and new ways to grow. Im still very passionate 
                        about helping others and creating art and have grown to see there’s a lot of opportunity to do both 
                        in building products and services that positively impact the world in a meaningful way.</p>
                </div>
                <img alt="portrait" src={portrait} style={{width: '230px', border: '5%'}}></img>

            </div>
        </section>
    );
};

export default About;

import React from "react";
import background from '../../images/jeremy-bishop-8xznAGy4HcY-unsplash.jpg';
import portrait from '../../images/IMG_4820.png'

const About = () => {
    const backgroundColor = {
        backgroundColor: '#474440'
    };

    return (
        <section>
            <div className="bg-image d-flex justify-content-center align-items-center "
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '50vh'
                }}>
                         <img alt="portrait" src={portrait} style={{width: '230px', border: '5%'}}></img>
        
                    <div className="d-flex display-6 text-center text-white align-items-end m-4">
                        Full Stack Developer ⬩ Artist ⬩ Designer
                    </div>
            </div>
            <div className="text-light p-4" style={backgroundColor}>
                <h2 className="px-5 pt-4 display-6">About Me</h2>
                <p className="lead p-4">I learned to find passion in the culture, the community and it’s creativity, 
                    the problem solving, the challenge, the potential for work-life balance and the 
                    promise that there’s always more to learn and new ways to grow. Im still very passionate 
                    about helping others and creating art and have grown to see there’s a lot of opportunity to do both 
                    in building products and services that positively impact the world in a meaningful way.</p>
            </div>
        </section>
    );
};

export default About;

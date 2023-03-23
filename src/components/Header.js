import React from "react";
import background from '../images/jeremy-bishop-8xznAGy4HcY-unsplash.jpg';

const Header = (props) => {

    return (
        <section>
            <div className="bg-image"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    height: '50vh'
                }}>
                    <div className="align-bottom display-6">
                        Full Stack Developer ⬩ Artist ⬩ Designer
                    </div>
            </div>
            <div className="bg-black text-light p-4">
                <h2 className="p-2 display-6">About Me</h2>
                <p className="lead">I learned to find passion in the culture, the community and it’s creativity, 
                    the problem solving, the challenge, the potential for work-life balance and the 
                    promise that there’s always more to learn and new ways to grow. Im still very passionate 
                    about helping others and creating art and have grown to see there’s a lot of opportunity to do both 
                    in building products and services that positively impact the world in a meaningful way.</p>
            </div>
        </section>
    );
};

export default Header 
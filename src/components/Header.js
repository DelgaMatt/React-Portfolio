import React from "react";
import Navigation from "./Navigation";
import background from '../images/jeremy-bishop-unsplash.jpg';

const Header = (props) => {
    return (
        <div className="bg-image"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: 'cover'
            }}>
                This is some text
            <Navigation />
        </div>
         
    );
};

export default Header 
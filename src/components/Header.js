import React from "react";
import Navigation from "./Navigation";


const Header = (props) => {
    return (
        <html>
        <header className="bg-image relative"
            style={{
                backgroundImage: `url(${require('../images/jeremy-bishop-unsplash.jpg')})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <Navigation />  
        </header>
       </html>
    );
};

export default Header
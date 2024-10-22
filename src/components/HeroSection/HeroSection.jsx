import React from "react";
import './HeroSection.css';
import Loading from '../Loading.jsx'; // Adjust the import path
import HeroImage from '../../assets/nishant_mishra.png';

function HeroSection() { 
    
    return (
        <div className="catch-container">
            <div className="marquee-container">
                    <pre>  NISHANT  MISHRA  </pre>
                    <pre>  NISHANT  MISHRA  </pre>
                    <pre>  NISHANT  MISHRA  </pre>
                    <pre>  NISHANT  MISHRA  </pre>
            </div>
            <h2 className="catchline left-catchline ">Hi there! I'm Nishant Mishra, your friendly neighborhood developer.</h2>
            <div className="image-container">
                <img src={HeroImage} alt="Nishant Mishra" className="hero-image" />
            </div>
            <h2 className="catchline right-catchline ">I am a developer who codes, designs, and occasionally pretends to know what I'm doing.</h2>
        </div>
    );
}

export default HeroSection;

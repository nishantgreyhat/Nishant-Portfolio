import React, { useEffect, useRef } from "react";
import './ContactsSection.css';
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";

function ContactsSection() {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view'); // Add animation class
                    } else {
                        entry.target.classList.remove('in-view'); // Remove animation class to restart animation
                    }
                });
            },
            { threshold: 0.2 }
        );

        const container = containerRef.current;
        if (container) {
            const items = container.querySelectorAll('.ContactHead h2, .socials h2, .handles');
            items.forEach(item => observer.observe(item));
        }

        return () => {
            if (container) {
                const items = container.querySelectorAll('.ContactHead h2, .socials h2, .handles');
                items.forEach(item => observer.unobserve(item));
            }
        };
    }, []);

    return (
        <div className="ContactsContainer" ref={containerRef}>
            <div className="ContactHead">
                <div id="getin">
                    <h2 className="animated">GET IN</h2>
                </div>
                <div id="touch">
                    <h2 className="animated">TOUCH</h2>
                </div>
            </div>
            <div className="vertical-line"></div>
            <div className="socials">
                <h2 className="social-head animated">Socials</h2>
                <ul className="handles-list">
                    <li className="handles animated" id="instagram">
                        <a href="https://www.instagram.com/nishhh.ant_/?hl=en"><img src={instagram} alt="instagram" /></a>
                        <a href="https://www.instagram.com/nishhh.ant_/?hl=en"><p>Instagram</p></a>
                    </li>
                    <li className="handles animated" id="github">
                        <a href="https://github.com/nishantgreyhat"><img src={github} alt="github" /></a>
                        <a href="https://github.com/nishantgreyhat"><p>GitHub</p></a>
                    </li>
                    <li className="handles animated" id="Linkedin">
                        <a href="https://www.linkedin.com/in/nishant-mishra-980010334/"><img src={linkedin} alt="Linkedin" /></a>
                        <a href="https://www.linkedin.com/in/nishant-mishra-980010334/"><p>Linkedin</p></a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ContactsSection;

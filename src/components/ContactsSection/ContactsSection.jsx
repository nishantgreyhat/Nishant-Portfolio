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
                        entry.target.classList.add('in-view');
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
                    <h2>GET IN</h2>
                </div>
                <div id="touch">
                    <h2>TOUCH</h2>
                </div>
            </div>
            <div className="vertical-line"></div>
            <div className="socials">
                <h2 className="social-head">Socials</h2>
                <ul className="handles-list">
                    <li className="handles" id="instagram"><a href=""><img src={instagram} alt="" /></a><a href=""><p>Instagram</p></a></li>
                    <li className="handles" id="github"><a href=""><img src={github} alt="" /></a><a href=""><p>GitHub</p></a></li>
                    <li className="handles" id="Linkedin"><a href=""><img src={linkedin} alt="" /></a><a href=""><p>Linkedin</p></a></li>
                </ul>
            </div>
        </div>
    );
}

export default ContactsSection;

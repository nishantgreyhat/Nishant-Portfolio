import React, { useEffect, useRef } from "react";
import './AboutSection.css'; // Correct the import statement

function AboutSection() {
    // Create refs to store the heading and paragraph elements
    const aboutHeadRef = useRef(null);
    const aboutParagraphRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.2 // Trigger when 20% of the element is in view
        };

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view'); // Add 'in-view' class when in view
                } else {
                    entry.target.classList.remove('in-view'); // Optional: remove class when out of view
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe the heading and paragraph
        if (aboutHeadRef.current) observer.observe(aboutHeadRef.current);
        if (aboutParagraphRef.current) observer.observe(aboutParagraphRef.current);

        // Cleanup observer on component unmount
        return () => {
            if (aboutHeadRef.current) observer.unobserve(aboutHeadRef.current);
            if (aboutParagraphRef.current) observer.unobserve(aboutParagraphRef.current);
        };
    }, []);

    return (
        <>
            <div className="AboutContainer">
                <h1 ref={aboutHeadRef} className="AboutHead">About</h1>
                <p ref={aboutParagraphRef} className="AboutParagraph">
                    Meet Nishant Mishra, a spirited designer and developer, blending a passion for adventure and travel with a knack for web development. With an insatiable curiosity for learning anything new and intriguing, he's the coder who's not afraid to chase both bugs and bucks with equal interest.
                </p>
            </div>
        </>
    );
}

export default AboutSection;

import React, { useEffect } from "react";
import './ProjectsSection.css';
import jobportalVid from '../../assets/videos/jobportal.mp4'
import lnkSnipVid from '../../assets/videos/lnksnip.mp4'
import arrowDownImg from '../../assets/arrowdown.png'


const ProjectsSection = () => {
    useEffect(() => {
        const projectNames = document.querySelectorAll('.ProjectNames'); // Select items with class 'ProjectNames'
        const videoContainer = document.querySelector('.VideoContainer');
        const videoElement = document.getElementById('project-video');
        const videoSource = document.getElementById('video-source');

        projectNames.forEach(item => {
            // Show video container on hover over ProjectNames only
            item.addEventListener('mouseenter', function() {
                const videoFile = item.parentElement.getAttribute('data-video'); // Get video from parent (li) data attribute
                videoSource.src = videoFile; // Set the video source dynamically
                videoElement.load(); // Reload the video with new source
                videoContainer.classList.add('active'); // Show the video container
            });

            // Hide video container when hover ends
            item.addEventListener('mouseleave', function() {
                videoContainer.classList.remove('active'); // Hide the video container
            });
        });

        // Cleanup event listeners on component unmount
        return () => {
            projectNames.forEach(item => {
                item.removeEventListener('mouseenter', () => {});
                item.removeEventListener('mouseleave', () => {});
            });
        };
    }, []);

    return (
        <div className="ProjectSection">
            <div className="ProjectHead">
                <h2>Projects</h2><img className="arrowdown" src={arrowDownImg}></img>
            </div>

            <div className="ProjectContainer">
                <ul className="ProjectList">
                    <li className="Projects"  data-video={jobportalVid}>
                        <h2 className="ProjectNames" id="Project1">JobPortal </h2>
                        <span className="projectText">The Job Portal is an intuitive platform that connects job seekers with potential employers, streamlining the hiring process. It features job listings, resume uploads, employer profiles, and a user-friendly search system. Designed to enhance accessibility and efficiency, the portal provides a seamless experience for both recruiters and applicants, making job searching and hiring easier and more effective.</span>
                        </li>
                    <li className="Projects"  data-video={lnkSnipVid}>
                        <h2 className="ProjectNames" id="Project2">lnkSnip</h2>
                        <span className="projectText">Lnksnip is a user-friendly and efficient URL shortening service designed to simplify and manage long URLs. With a sleek interface and a secure backend, it offers features like customizable short links, analytics tracking, and QR code generation. Built with performance and scalability in mind, Lnksnip ensures fast redirection and reliable link management for individuals and businesses.</span>
                        </li>
                    <li className="Projects"  data-video={jobportalVid}>
                        <h2 className="ProjectNames" id="Project3">Vyadyavatica</h2>
                        <span className="projectText">The Virtual Herbal Garden is an interactive and educational platform showcasing a diverse range of medicinal plants used in AYUSH (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy). Designed as an immersive experience, the project allows users to explore a digital garden where they can learn about the medicinal properties, uses, and significance of various herbs. With an engaging interface and informative content, the Virtual Herbal Garden aims to promote awareness of traditional herbal medicine in an interactive and accessible manner.</span>
                        </li>
                    {/* <li className="Projects"  data-video={lnkSnipVid}>
                        <h2 className="ProjectNames" id="Project4">Project4 </h2>
                        <span className="projectText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque fugit officia atque? Porro sed alias officia laboriosam maiores facere.</span>
                        </li> */}
                    
                </ul>
                <div className="hoverInfo">
                    <h2>Hover over the project names to get a preview !</h2>
                </div>

                <div className="VideoContainer">
                    <video id="project-video" width="400" autoPlay muted loop>
                        <source src="lnksnipVid.mp4" id="video-source" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}

export default ProjectsSection;

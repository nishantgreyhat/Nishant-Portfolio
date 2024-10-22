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
                    <li className="Projects"  data-video={jobportalVid}><h2 className="ProjectNames" id="Project1">JobPortal </h2><span className="projectText">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, error at? Sit expedita dolorem labore quibusdam rerum distinctio repellat iste!</span></li>
                    <li className="Projects"  data-video={lnkSnipVid}><h2 className="ProjectNames" id="Project2">lnkSnip</h2><span className="projectText">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium itaque quis corrupti eligendi deserunt facere distinctio placeat vero, maxime laboriosam!</span></li>
                    <li className="Projects"  data-video={jobportalVid}><h2 className="ProjectNames" id="Project3">Project3</h2><span className="projectText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores atque deleniti dolorem a id aliquid reiciendis in blanditiis cupiditate delectus.</span></li>
                    <li className="Projects"  data-video={lnkSnipVid}><h2 className="ProjectNames" id="Project4">Project4 </h2><span className="projectText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque fugit officia atque? Porro sed alias officia laboriosam maiores facere.</span></li>
                    
                </ul>

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

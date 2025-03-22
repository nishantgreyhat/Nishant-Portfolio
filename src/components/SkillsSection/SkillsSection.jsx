import React from "react";
import "./SkillsSection.css";
import arrowDownImg from '../../assets/arrowdown.png'

function SkillsSection() {
    return (
        <>
        <div className='techHead'>TechStack<img className="arrowdown" src={arrowDownImg}></img></div>
            <div className="container">
                <div className="items item1">
                    <p>Timeframe</p>
                    <hr />
                </div>
                <div className="items item2">
                    <p>Discipline</p>
                    <hr />
                </div>
                <div className="items item3">
                    <p>Tools</p>
                    <hr />
                </div>
                <div className="items item4">Year 2024</div>
                <div className="items item5">
                    Web Design & Development
                </div>
                <div className="items item6">
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JAVASCRIPT</li>
                        <li>REACT</li>
                        <li>Figma</li>
                    </ul>
                </div>
                <div className="items item7">Year 2023</div>
                <div className="items item8">
                    Data Structure &Algorithms
                </div>
                <div className="items item9">
                    <ul>
                        <li>C </li>
                        <li> Python </li>
                        <li> Java </li>
                    </ul>
                </div>
            </div>
        </>


    );

}
export default SkillsSection;
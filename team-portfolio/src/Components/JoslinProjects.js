import React, {useState} from 'react';
import "./JoslinProjects.css"
import ProjectBox from "./ProjectBox";
import back from "../img/arrow.png";
import forward from "../img/forward.png"
import jb from "../img/jb.png"
import tesla from "../img/tesla.png"
import brawl from "../img/brawl.png"
import budget from "../img/budget.png"
import soundg8 from "../img/soundg8.png"
import soundMory from "../img/soundmory.png"
import linkedIn from "../img/linkedIn.jpg";
import {ExternalLink} from "react-external-link";
import Back from "../img/arrow.png";
import {Link} from "react-router-dom";
function JoslinProjects(props) {
    const values =[
        {img:soundg8,title:"SoundG8",description: "Music sharing social media website", link:"https://github.com/JoslinSome/SoundG8"},
        {img:jb,title:"JB Covid Solutions",description: "Covid tracking app \nHackathon winner", link:"https://github.com/JoslinSome/J-B-Covid-Solutions"},
        {img:tesla,title:"Tesla model DIY",description: "Blutooth voice controlled Car", link:"https://github.com/JoslinSome/Tesla-Model-DIY"},
        {img:brawl,title:"WorldWide Brawl",description: "2D fighting game", link:"https://github.com/JoslinSome/WorldWide-Brawl"},
        {img:budget,title:"TrueBudget",description: "Self Budgeting Application", link:"https://github.com/JoslinSome/TrueBudget"},
        {img:soundMory,title:"SoundMory",description: "Sound memory game", link:"https://github.com/JoslinSome/SoundMory"}

    ]
    const [counter, setCounter] = useState(1)
    function changeCounter(){
        counter === 1? setCounter(2):setCounter(1)
    }
    return (
        <div className="page1">
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="row1">
                <Link to="/joslin">
                    <img src={back} />
                </Link>
                <h1 className= "h11">My Projects</h1>

            </div>
            <div className="row1 center">
                <ExternalLink href={values[counter*3-3].link} className='nav-links'>
                    <ProjectBox value={values[counter*3-3]}/>
                </ExternalLink>
                <ExternalLink href={values[counter*3-2].link} className='nav-links'>
                    <ProjectBox value={values[counter*3-2]}/>
                </ExternalLink>
                <ExternalLink href={values[counter*3-1].link} className='nav-links'>
                    <ProjectBox value={values[counter*3-1]}/>
                </ExternalLink>


            </div>
            <br/>
            <br/>
            <br/>

            <button onClick={()=> changeCounter()}>
                <img src={back} className="left"/>
            </button>
            <button onClick={()=> changeCounter()}>
                <img src={forward} className="right"/>
            </button>

        </div>
    );
}

export default JoslinProjects;
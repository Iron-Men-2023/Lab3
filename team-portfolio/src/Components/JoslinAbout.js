import React from 'react';
import Section from "./Section";
import "./JoslinAbout.css"
import joslin from "../img/joslin.png"
import {ExternalLink} from "react-external-link";
import github from "../img/github.png"
import linkedIn from "../img/linkedIn.jpg";
import fb from "../img/fb.png"
import gram from "../img/gram.png"
import Back from "../img/arrow.png";
import {Link} from "react-router-dom";
function JoslinAbout(props) {
    return (
        <div className="about">
            <Link to="/joslin" className="link">
                <img src={Back} className="back"/>
            </Link>
            <div className="row">
                <div className="text">
                    <h1 className="aboutTitle">Hi, I'm Joslin 👋👋👋</h1>
                    <h2 className="h1">
                        Senior computer Science Engineering major at the University of Iowa.
                    </h2>
                    <h2 className="h12">
                        Originally from: Ouagadougou, Burkina Faso 🇧🇫🇧🇫
                    </h2>
                    <h2 className="h121">
                        Published African Author:
                        <ExternalLink href={"https://burkina24.com/2019/07/02/saanbe-a-joslin-some-si-seulement-je-savais/"} className="h1link links">
                            Si Seulement je Savais
                        </ExternalLink>
                    </h2>
                    <h2 className="h122">
                        Skills: React, Node js, Rails, AI, Machine Learning, Teamwork, Creative/Analytical thinking
                    </h2>
                    <h2 className="h1211">
                        Languages: JavaScript, Python, Java, C++, TypeScript, Ruby, HTML, CSS, MatLab, PHP
                    </h2>
                </div>
                <div>
                    <img src={joslin} className="joslinpic"/>

                </div>
            </div>
            <h1 className="connect">Connect with me:</h1>
            <br/>
            <div className="row float">
                <div >
                    <ExternalLink href="https://www.linkedin.com/in/saanbé-joslin-somé-1726581a9" >
                        <img src ={linkedIn} className="links in fb"/>
                    </ExternalLink>
                </div>

                <div>
                    <ExternalLink href="https://www.github.com/JoslinSome" >
                        <img src ={github} className='links fb'/>
                    </ExternalLink>
                </div>
                <div>
                    <ExternalLink href="https://www.facebook.com/saanbe.some/" >
                        <img src ={fb} className='links fb'/>
                    </ExternalLink>
                </div>
                <div>
                    <ExternalLink href="https://www.instagram.com/le_bessan_babyyy/" >
                        <img src ={gram} className='links fb'/>
                    </ExternalLink>
                </div>
            </div>
            <h1 className="phone"> Or Call: +13194001054</h1>

        </div>
    );
}

export default JoslinAbout;
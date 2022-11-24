import React from 'react';
import Joslin from "../img/JoslinmacbookSD.png"
import "./JoslinPage.css"
import linkedIn from "../img/linkedIn.jpg"
import Option from "./option";
import {ExternalLink} from "react-external-link";
import IronMan from "../img/ironMan3.gif"
function JoslinPage(props) {
    return (
        <div className=''>
            <div className='page'>
                <div className="row">
                    <h1 className="title">Welcome to Joslin's World</h1>

                </div>

                <div className='float'>
                    <div className='row'>
                        <Option title="Experience" link="/joslin/Experience"/>
                        <Option title='Education'/>
                        <ExternalLink href="https://www.linkedin.com/in/saanbé-joslin-somé-1726581a9" className='nav-links linkedin'>
                            <img src ={linkedIn}/>
                        </ExternalLink>
                    </div>
                    <div className='row'>
                        <Option title="Resume"/>
                        <Option title="Projects"/>
                    </div>
                </div>
                <div className="row">
                    <img src={IronMan} className="ironMan"/>

                    <img src={Joslin} className="joslin"/>

                </div>

            </div>

        </div>
    );
}

export default JoslinPage;
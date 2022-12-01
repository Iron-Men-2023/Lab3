import React from 'react';
import Joslin from "../img/JoslinmacbookSD.png"
import "./JoslinPage.css"
import linkedIn from "../img/linkedIn.jpg"
import Option from "./option";
import {ExternalLink} from "react-external-link";
import IronMan from "../img/ironMan3.gif"
import PageWithComments from "./PageWithComments";
function JoslinPage(props) {
    return (
        <div className=''>
            <div className='page'>
                <div className="row1">
                    <h1 className="title">Welcome to Joslin's World</h1>

                </div>

                <div className='float'>
                    <div className='row1'>
                        <Option title="Experience" link="/joslin/Experience"/>
                        <Option title='About Me' link="/joslin/About"/>
                        <ExternalLink href="https://www.linkedin.com/in/saanbé-joslin-somé-1726581a9" className='nav-links linkedin'>
                            <img src ={linkedIn}/>
                        </ExternalLink>
                    </div>
                    <div className='row1'>
                        <Option title="Resume" link="/joslin/Resume"/>
                        <Option title="Projects" link="/joslin/Projects"/>
                    </div>
                </div>
                <div className="row1">
                        <img src={IronMan} className="ironMan"/>

                        <img src={Joslin} className="joslin"/>

                </div>

            </div>
            <PageWithComments/>

        </div>
    );
}

export default JoslinPage;
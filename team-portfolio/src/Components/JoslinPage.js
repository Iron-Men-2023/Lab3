import React from 'react';
import Joslin from "../img/JoslinmacbookSD.png"
import "./JoslinPage.css"
import linkedIn from "../img/comment.png"
import Option from "./option";
import {ExternalLink} from "react-external-link";
import IronMan from "../img/ironMan3.gif"
import PageWithComments from "./PageWithComments";
import resume from "../img/JoslinResume1022.pdf"
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
                        <a href="#comment" className='nav-links linkedin'>
                            <button className="comment2">Add Comment</button>
                        </a>
                    </div>
                    <div className='row1'>
                        <Option title="Resume" link={resume}/>
                        <Option title="Projects" link="/joslin/Projects"/>
                    </div>
                </div>
                <div className="row1">
                        <img src={IronMan} className="ironMan"/>

                        <img src={Joslin} className="joslin"/>

                </div>
                <br/>
                <br/>
                <section id="comment">
                    <PageWithComments/>
                </section>

            </div>

        </div>
    );
}

export default JoslinPage;
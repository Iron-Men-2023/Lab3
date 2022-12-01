import React from 'react';
import "./Justin.css"
import JustinImg from "../img/justin2.jpg"
import {Link} from "react-router-dom";
import PageWithComments from "./PageWithComments";
function Justin(props) {
    return (
        <div className="jpage">
            <div className="row1 down">
                <img src={JustinImg} className="jimg"/>
                <div className="jtext">
                    <h1 className="jh2"> Hi I'm</h1>
                    <h1 className="jh1">Justin Kluesner</h1>
                    <h2 className="jh2"> Electrical Engineer</h2>
                    <br/>
                    <br/>
                    <h3 className="jh3">Senior Electrical Engineering student at the University of Iowa</h3>
                    <h3 className="jh3">I dont know what to write here but feel like there should be text</h3>
                    <h3 className="jh3">I dont know what to write here but feel like there should be text</h3>
                    <h3 className="jh3">Born and raised in ..... Iowa </h3>
                    <br/>
                    <br/>
                    <div className="row1">
                        <Link className="nav-links">
                            <button className="jbtn">Education</button>
                        </Link>
                        <Link className="nav-links">
                            <button className="jbtn">Resume</button>
                        </Link>
                        <Link className="nav-links">
                            <button className="jbtn">Experience</button>
                        </Link>
                    </div>
                </div>
            </div>
            <br/>
            <PageWithComments/>
        </div>
    );
}

export default Justin;
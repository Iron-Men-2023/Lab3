import React from 'react';
import resume from "../img/joslinResume.png"
import "./JoslinResume.css"
import { Document, Page } from 'react-pdf';
import back from "../img/arrow.png"
import Back from "../img/arrow.png";
import {Link} from "react-router-dom";
function JoslinResume(props) {
    return (
        <div className="page2">
            <Link to="/joslin" className="link">
                <img src={back} className="back"/>
            </Link>
        <img src={resume}/>
        </div>
    );
}

export default JoslinResume;
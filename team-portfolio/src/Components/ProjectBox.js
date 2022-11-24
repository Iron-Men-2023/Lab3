import React from 'react';
import "./ProjectBox.css"
import coda from "../img/coda.png"
import back from "../img/arrow.png"
import {ExternalLink} from "react-external-link";
function ProjectBox(props) {
    const {value} = props
    const {img, title, description,link} = value
    return (
        <div>
            <div className="Box">
                    <img src={img} className="img"/>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ProjectBox;
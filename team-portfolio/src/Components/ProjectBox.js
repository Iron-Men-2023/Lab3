import React from 'react';
import "./ProjectBox.css"

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
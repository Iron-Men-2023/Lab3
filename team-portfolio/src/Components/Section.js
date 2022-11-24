import React from 'react';
import "./Section.css"
function Section(props) {
    const {title,tasks} = props
    return (
        <div>

            <div className="section">

                <br/>
                    <h2 className="title">{title}</h2>
                <ul>
                    <h3 className="li">{tasks[0]}</h3>
                    <h3 className="li"> {tasks[1]}</h3>
                    <h3 className="li">{tasks[2]}</h3>
                </ul>
            </div>
        </div>
    );
}

export default Section;
import React from 'react';
import "./options.css"
import "../App.css"
import {Link} from "react-router-dom";

function Option(props) {
    const {title,link} = props
    return (

        <div  >
            {title==="Resume"?
            <Link to={link} className='option' target="_blank">
                <h4 className="h2">{title}</h4>
            </Link>
                :
            <Link to={link} className='option'>
                <h4 className="h2">{title}</h4>
            </Link>}
        </div>
    );
}

export default Option;
import React from 'react';
import "./options.css"
import "../App.css"
import {Link} from "react-router-dom";

function Option(props) {
    const {title,link} = props
    return (

        <div  >

            <Link to={link} className='option'>
                <h3 className="h2">{title}</h3>
            </Link>
        </div>
    );
}

export default Option;
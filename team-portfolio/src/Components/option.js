import React from 'react';
import "./options.css"
import "../App.css"
import {Link} from "react-router-dom";

function Option(props) {
    const {title} = props
    return (

        <div  >

            <Link to='/joslin' className='option'>
                <h2 className="h2">{title}</h2>
            </Link>
        </div>
    );
}

export default Option;
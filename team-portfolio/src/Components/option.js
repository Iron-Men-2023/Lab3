import React from 'react';
import "./options.css"
function Option(props) {
    const {title} = props
    return (
        <div className='option'>
            <h2 className="h2">{title}</h2>
        </div>
    );
}

export default Option;
import React from 'react';
import "./Justin.css"
import JustinImg from "../img/Justin.jpg"
function Justin(props) {
    return (
        <div className="jpage">
            <div className="row1 down">
                <img src={JustinImg} className="jimg"/>
                    <h1 className="jh1">Justin Kluesner</h1>
            </div>
        </div>
    );
}

export default Justin;
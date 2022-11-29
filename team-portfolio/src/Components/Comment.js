import React from 'react'
import "./Comments.css"
import linkedIn from "../img/linkedIn.jpg";
function Comment(props) {
  const {value} = props
  const {comment,name,img} = value
  return (
    <div className="text-content">
      <label className="label">{name}</label>
        <br/>
        <div className="row">
            <img src={img} className="box-image"/>
            <input className="text-bubble" value={comment} readOnly />
        </div>
        <br/>
        <br/>

    </div>
  )
}

export default Comment
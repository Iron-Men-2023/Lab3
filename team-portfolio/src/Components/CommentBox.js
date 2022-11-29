import React, {useState} from 'react'
import "./CommentBox.css"
import linkedIn from "../img/linkedIn.jpg"
import Comment from "./Comment";
import img from "../img/add-image.png"

function CommentBox()
{

    const [comment, setComment] = useState("");
    const [user, setUser] = useState("");
    const [image, setImage] = useState(img)
    const [comments, setComments] = useState([])
    function addMessage(){
        const current = {name: user, comment:comment, img:image}
        setComments(comments => [...comments, current])
        console.log(comments)
    }
    return(
    <div>
        <div className="comment">
            {comments.slice(0).reverse().map((item,index)=>{
                return <Comment value={item}/>
            })}
        </div>
        <div className="inputs">
            <input type="file" accept="image/*"
                   onChange={(event)=>setImage(URL.createObjectURL(event.target.files[0]))} name="Add Image"/>

            <div className="row marg">

                <img src={image} className="box-image"/>
                <input className="input2" placeholder="Enter Name Here"
                       onChange={(event) => setUser(event.target.value)}/>
            </div>
            <input className="input" placeholder="Enter Comment Here"
                   onChange={(event) => setComment(event.target.value)}/>
        </div>
        <br/>

        <button className="box-btn" onClick={() => addMessage()}><h3 className="send">Send</h3></button>
    </div>
    )
}

export default CommentBox

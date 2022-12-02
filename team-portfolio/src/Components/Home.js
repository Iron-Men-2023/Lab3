
import React, {useEffect, useState} from 'react'
import bg from "../images/bg.png"
import './adnane.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import homeGif from "../images/homeGif.gif"
import Adnane from "../images/Adnane-profile-picture.jpg"
import Ben from "../img/BenDsollar.jpeg"
import Joslin from "../img/JoslinMain.jpeg"
import main from "../img/main.jpeg"
import JDawg from "../img/JDawg.jpg"
export default function Home() {
    const [img,setImg] = useState(main)
    const [text,setText] = useState("")
    const [title,setTitle] = useState("")
    useEffect(() => {
        document.title = "Ironmen Portfolio"
    }, [])
    return (
        <div>
            <img src={homeGif} alt="loading..." style={{ "right": 0, "position": "absolute", height: "15vh" }} />

            <div className='adnane-container' style={{ background: "#aa0505", height: "40vh" }}>

                <div className='adnane-text-area'>

                    <h1 style={{ color: "#fbca03" }}> We are Iron-Men</h1>
                </div>
                <br/>
                <Row>
                    <Col>
                        <div className="nav-links2" onMouseOver={()=> setImg(Adnane)}>
                            <h1> Adnane</h1>
                            <img src={bg} style={{ height: 100, width: 100 }} />
                            <div className='adnane-text-area'>
                                <a style={{ color: "#fbca03" }}> Description</a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="nav-links2" onMouseOver={()=> setImg(Ben)}>

                        <h1>Ben</h1>
                        <img src={bg} style={{ height: 100, width: 100 }} />
                        <div className='adnane-text-area'>
                            <a style={{ color: "#fbca03" }}> Description</a>
                        </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="nav-links2" onMouseOver={()=> setImg(Joslin)}>
                        <h1> Joslin</h1>
                        <img src={bg} style={{ height: 100, width: 100 }} />
                        <div className='adnane-text-area'>
                            <a style={{ color: "#fbca03" }}> Description</a>
                        </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="nav-links2" onMouseOver={()=> setImg(JDawg)}>
                        <h1> Justin</h1>
                        <img src={bg} style={{ height: 100, width: 100 }} />
                        <div className='adnane-text-area'>
                            <a style={{ color: "#fbca03" }}> Description</a>
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="bottom">
                <img src={img} className="bottom-image"/>
            </div>


        </div>

    )
}

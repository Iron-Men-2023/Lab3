
import React, {useEffect, useState} from 'react'
import bg from "../images/bg.png"
import './adnane.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import homeGif from "../images/homeGif.gif"
import Adnane from "../images/Adnane-profile-picture.jpg"
import Adnane2 from "../img/Adnane2.jpg"
import Adnane3 from "../img/adnane3.jpeg"
import Ben from "../img/BenDsollar.jpeg"
import Ben2 from "../img/Ben2.jpg"
import Ben3 from "../img/Ben3.jpeg"
import Joslin2 from "../img/Joslin2.jpeg"
import Joslin3 from "../img/Joslin3.jpg"
import Joslin from "../img/JoslinMain.jpeg"
import main from "../img/main.jpeg"
import main2 from "../img/team.jpg"
import main3 from "../img/main3.jpg"
import JDawg from "../img/JDawg.jpg"
import Jdawg2 from "../img/Justin.jpg.jpg"
import JDawg3 from"../img/justin2.jpg"
export default function Home() {
    const [img,setImg] = useState([main,main3,main2])
    const [joslin,setJoslin] = useState(false)
    const [ben,setBen] = useState(false)
    const [ad,setAd] = useState(false)
    const [justin,setJustin] = useState(false)
    function joslinEff(){
        setJoslin(true)
        setImg([Joslin,Joslin3,Joslin2])
    }
    function benEff(){
        setBen(true)
        setImg([Ben,Ben2,Ben3])
    }
    function adEff(){
        setAd(true)
        setImg([Adnane,Adnane2,Adnane3])
    }
    function justinEff(){
        setJustin(true)
        setImg([JDawg,Jdawg2,JDawg3])
    }
    function JoslinReset(){
        setJoslin(false)
        if(!(ad || justin || ben))
        {
            setImg([main,main3,main2])
        }
    }
    function BenReset(){
        setBen(false)
        if(!(ad || justin || joslin))
        {
            setImg([main,main3,main2])
        }
    }
    function AdReset(){
        setAd(false)
        if(!(ben || justin || joslin))
        {
            setImg([main,main3,main2])
        }
    }
    function JustinReset(){
        setJustin(false)
        if(!(ad || ben || joslin))
        {
            setImg([main,main3,main2])
        }
    }
    useEffect(() => {
        document.title = "Ironmen Portfolio"
    }, [])
    return (
        <div>
            <img src={homeGif} alt="loading..." style={{ "right": 0, "position": "absolute", height: "10vh" }} />

            <div className='adnane-container' style={{ background: "#aa0505", height: "40vh" }}>

                <div className='adnane-text-area'>

                    <h1 style={{ color: "#fbca03" }}> We are Iron-Men</h1>
                </div>
                <Row>
                    <Col>
                        <div className="nav-links2" onMouseOver={()=> adEff()} onMouseLeave={()=>AdReset()}>
                            <h1> Adnane</h1>
                            <img src={bg} style={{ height: 100, width: 100 }} />
                            <div className='adnane-text-area'>
                                <a style={{ color: "#fbca03" }}> Major: Electrical Engineering</a>
                                <br/>
                                <a style={{ color: "#fbca03" }}> Skills: Electrical Circuits/Data Mining</a>
                                <br/>
                                <a style={{ color: "#fbca03" }}> aezouhri@uiowa.edu/+1(319)255-3908</a>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="nav-links2" onMouseOver={()=> benEff()} onMouseLeave={()=>BenReset()}>

                        <h1>Ben</h1>
                        <img src={bg} style={{ height: 100, width: 100 }} />
                        <div className='adnane-text-area'>
                            <a style={{ color: "#fbca03" }}> Major: Computer Science Engineering</a>
                            <br/>
                            <a style={{ color: "#fbca03" }}> Skills: SAAS/Software Design</a>
                            <br/>
                            <a style={{ color: "#fbca03" }}> bdsollar@uiowa.edu/+1(217)435-392</a>
                        </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="nav-links2" onMouseOver={()=> joslinEff()} onMouseLeave={()=>JoslinReset()}>
                        <h1> Joslin</h1>
                        <img src={bg} style={{ height: 100, width: 100 }} />
                        <div className='adnane-text-area'>
                            <a style={{ color: "#fbca03" }}> Major: Computer Science Engineering</a>
                            <br/>
                            <a style={{ color: "#fbca03" }}> Skills: AI/ML/Web Development</a>
                            <br/>
                            <a style={{ color: "#fbca03" }}> jsome@uiowa.edu/+1(319)400-3922</a>
                        </div>
                        </div>
                    </Col>
                    <Col>
                        <div className="nav-links2" onMouseOver={()=> justinEff()} onMouseLeave={()=>JustinReset()}>
                        <h1> Justin</h1>
                        <img src={bg} style={{ height: 100, width: 100 }} />
                        <div className='adnane-text-area'>
                            <a style={{ color: "#fbca03" }}> Major: Electrical Engineering</a>
                            <br/>
                            <a style={{ color: "#fbca03" }}> Skills: Electronic Circuits/Control Theory</a>
                            <br/>
                            <a style={{ color: "#fbca03" }}> jkluesner@uiowa.edu/+1(314)532-3921</a>
                        </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="bottom">
                <div className="row1">
                    <img src={img[0]} className="bottom-image"/>
                    <img src={img[1]} className="bottom-image"/>
                    <img src={img[2]} className="bottom-image"/>
                </div>
            </div>


        </div>

    )
}

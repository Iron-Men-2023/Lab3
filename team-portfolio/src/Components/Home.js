
import React from 'react'
import bg from "../images/bg.png"
import './adnane.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import homeGif from "../images/homeGif.gif"

export default function Home() {
    return (
        <div>
            <img src={homeGif} alt="loading..." style={{ "right": 0, "position": "absolute" }} />

            <div className='adnane-container' style={{ background: "#aa0505", height: "100%" }}>

                <div className='adnane-text-area'>

                    <h1 style={{ color: "#fbca03" }}> We are Iron-Men</h1>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                    <Col>
                        <h1> Adnane</h1>
                        <img src={bg} style={{ height: 100, width: 100 }} />
                        <div className='adnane-text-area'>
                            <a style={{ color: "#fbca03" }}> Description</a>
                        </div>
                    </Col>
                    <Col>
                        <h1>Ben</h1>
                        <img src={bg} style={{ height: 100, width: 100 }} />
                        <div className='adnane-text-area'>
                            <a style={{ color: "#fbca03" }}> Description</a>
                        </div>
                    </Col>
                    <Col>
                        <h1> Joslin</h1>
                        <img src={bg} style={{ height: 100, width: 100 }} />
                        <div className='adnane-text-area'>
                            <a style={{ color: "#fbca03" }}> Description</a>
                        </div>
                    </Col>
                    <Col>
                        <h1> Justin</h1>
                        <img src={bg} style={{ height: 100, width: 100 }} />
                        <div className='adnane-text-area'>
                            <a style={{ color: "#fbca03" }}> Description</a>
                        </div>
                    </Col>
                </Row>
            </div>

            <div className='adnane-container' style={{ background: "#aa0505", height: "100%" }}>

                <div className='adnane-text-area'>

                    <h1 style={{ color: "#fbca03" }}> Team Iron-Men</h1>
                </div>

            </div>


        </div>

    )
}

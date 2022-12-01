import React from 'react';
import "./Justin.css"
import JustinImg from "../img/justin2.jpg"
import {Link} from "react-router-dom";
import PageWithComments from "./PageWithComments";
import undergrad from "../images/Undergrad-icon.jpg";
import Section from "./Section";
import Section2 from "./Section2";
import {ExternalLink} from "react-external-link";
import linkedIn from "../img/linkedIn.jpg";
import github from "../img/github.png";
import fb from "../img/fb.png";
import gram from "../img/gram.png";
function Justin(props) {
    return (
        <div className="">
            <div className="row1 down jpage">
                <img src={JustinImg} className="jimg"/>
                <div className="jtext">
                    <h1 className="jh2"> Hi I'm</h1>
                    <h1 className="jh1">Justin Kluesner</h1>
                    <h2 className="jh2"> Electrical Engineer</h2>
                    <br/>
                    <br/>
                    <h3 className="jh3">Senior Electrical Engineering student at the University of Iowa</h3>
                    <h3 className="jh3">I dont know what to write here but feel like there should be text</h3>
                    <h3 className="jh3">I dont know what to write here but feel like there should be text</h3>
                    <h3 className="jh3">Born and raised in ..... Iowa </h3>
                    <br/>
                    <br/>
                    <div className="row1">
                            <a href="#education"><button className="jbtn">Education</button></a>
                        <Link className="nav-links">
                            <button className="jbtn">Resume</button>
                        </Link>
                        <a className="nav-links" href="#comment">
                            <button className="jbtn">Comment</button>
                        </a>
                    </div>
                </div>
            </div>
            <br/>
            <section id="education" className="jedu alignn">

                <h1 className="">Education</h1>
                <div className="row1">
                    <div className="col-4 col-6-medium col-12-small jlow">
                        <section className="box-style1">
                            <div className="image-fit"><img src={undergrad}/></div>
                            <h3><u><a>B.S.E Electrical Engineering</a></u></h3>
                            <u><a
                                href="https://catalog.registrar.uiowa.edu/liberal-arts-sciences/computer-science/computer-science-minor/"
                                target="_blank" style={{"color": 'black'}}>
                            </a></u>
                            University of Iowa
                            <p>August 2019 - May 2023</p>
                        </section>
                    </div>
                    <div className="classes">
                        <h1>Relevant Courses</h1>
                        <Section2 title="Advanced Circuit Techniques"/>
                        <Section2 title="Control Theory"/>
                        <Section2 title="Electro-magnetic Theory"/>
                        <Section2 title="Electronic Circuts"/>
                        <Section2 title="Communication Systems"/>
                        <Section2 title="Embedded Systems"/>


                    </div>
                </div>
            </section>
            <section id="contact" className="jpage2">
                <div className="row1 float">
                    <div >
                        <ExternalLink href="https://www.linkedin.com/in/saanbé-joslin-somé-1726581a9" >
                            <img src ={linkedIn} className="links in fb"/>
                        </ExternalLink>
                    </div>

                    <div>
                        <ExternalLink href="https://www.github.com/JoslinSome" >
                            <img src ={github} className='links fb'/>
                        </ExternalLink>
                    </div>
                    <div>
                        <ExternalLink href="https://www.facebook.com/saanbe.some/" >
                            <img src ={fb} className='links fb'/>
                        </ExternalLink>
                    </div>
                    <div>
                        <ExternalLink href="https://www.instagram.com/le_bessan_babyyy/" >
                            <img src ={gram} className='links fb'/>
                        </ExternalLink>
                    </div>
                </div>
                <h1 className="phone"> Or Call: +13194001054</h1>
            </section>
            <section id="comment">
                <PageWithComments/>
            </section>
        </div>
    );
}

export default Justin;
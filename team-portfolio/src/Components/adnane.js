import React from 'react';
import profile from "../images/Adnane-profile-picture.jpg"
import french from "../images/slide1.png"
import morocco from "../images/slide2.png"
import states from "../images/slide3.png"
import undergrad from "../images/Undergrad-icon.jpg"
import master from "../images/master-icon-20.jpg"
import resume from "../images/Adnane Ezouhri Resume SWE.pdf"
import './adnane.css'
import { Slide } from 'react-slideshow-image';
import { Zoom } from 'react-slideshow-image';

import 'bootstrap/dist/css/bootstrap.css';

import ironMan from '../images/ironManAdnane.gif'
import ironMan2 from '../images/ironManAdnane2.gif'
import ironManJ from '../img/ironMan.gif'


const Adnane = () => {
    return (
        <body>
            <article class="article">
                <img src={ironMan2} alt="loading..." style={{ "right": 0, "position": "absolute" }} />
                <img src={ironMan2} alt="loading..." style={{ "left": 0, "position": "absolute" ,"transform": "scaleX(-1)" }} />

                <div class="adnane-container">
                    <div class="circle" >
                        <img src={profile} />
                    </div>

                    <div class="adnane-text-area" >
                        <header>
                            <h1 style={{ "color": "black" }}>Hello there, it's <b>Adnane Ezouhri</b>.</h1>
                        </header>
                        <p>I'm an <strong>Electrical and Computer Engineer</strong> in the Iron-Men team!</p>
                        <a href={resume} target="_blank" class="button large"> Download my resume here! </a>
                    </div>
                </div>
            </article>

            <article class="article" >
                <div class="adnane-container">
                <h1 style={{ "color": "black" }}>A little to know about me...</h1> 
                    <Slide>
                        <div className="each-slide-effect">
                            <div style={{
                                'backgroundImage': `url(${french})`,
                            }}>
                                <span>Born in France and raised in the Caribbean</span>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${morocco})` }}>
                                <span>Then Spent 11 years in Morocco</span>
                            </div>
                        </div>
                        <div className="each-slide-effect">
                            <div style={{ 'backgroundImage': `url(${states})` }}>
                                <span>Wound up in the United States for education</span>
                            </div>
                        </div>
                    </Slide>

                </div>
            </article>

            <article class="article">
                <div class="adnane-container">
                    <h1 style={{ "color": "black" }}> A Hawkeye at <icon className='fas fa-heart'></icon> </h1> 
                    <div class="row aln-center">
                        <div class="col-4 col-6-medium col-12-small">
                            <section class="box-style1">
                                <div class="image-fit"><img src={undergrad} /></div>
                                <h3><u><a>B.S.E Electrical & Computer Engineering</a></u></h3>
                                <u><a href="https://catalog.registrar.uiowa.edu/liberal-arts-sciences/computer-science/computer-science-minor/"
                                    target="_blank" style={{ "color": 'black' }}>
                                    <p style={{ "margin": '2.5%' }}>Computer Science Minor</p>
                                </a></u>
                                University of Iowa
                                <p>August 2019 - May 2023</p>
                            </section>
                        </div>
                        <div class="col-4 col-6-medium col-12-small">
                            <section class="box-style1">
                                <div class="image fit"><img src={master} /></div>
                                <h3><u><a>M.S Electrical & Computer Engineering</a></u></h3>
                                <u><a href="https://ece.engineering.uiowa.edu/undergraduate/joint-bsms-degree-program-u2g"
                                    target="_blank" style={{ "color": 'black' }}>
                                    <p style={{ "margin": '3%' }}>U2G Program</p>
                                </a></u>
                                University of Iowa
                                <p>August 2019 - May 2023</p>
                            </section>
                        </div>
                    </div>
                </div>
            </article>

            <article class="article">
                <div class="adnane-container">
                    <div class="adnane-text-area">
                        <header>
                            <h1 style={{ "color": "black" }}>My Experience</h1>
                        </header>
                    </div>
                    <div class="timeline">
                        <div class='outer'>
                            <div class="card">
                                <div class="info" >
                                    <h3 class="title">Software Engineer 08/2022-12/2022</h3>
                                    <div class="tab" >
                                        <li>Restructured existing database to reduce time complexity of data flux between Sentry Software, embedded devices, and server  </li>
                                        <li>Rebased data structure used in home-made software to enhance capabilities and solve 120+ bugs   </li>
                                        <li>Prototyped and tested a gateway using an ESP32 using Arduino IDE and VS Code  </li>
                                        <li>Assisted the engineering team to aid in the expansion of the Sentry Software for deployment to customers </li>
                                        <li>Developed code in Android Studio in Java, Android, and XML to monitor piglets and swine to notify farmers of unusual activities </li>

                                    </div>
                                </div>

                            </div>


                            <div class="card">
                                <div class="info" >
                                    <h3 class="title">Electrical Engineer 05/2022-08/2022</h3>
                                    <div class="tab" >
                                        <li>Assisted Engineering team of 6 in the completion of Thermal Camera Capital project to optimize cooling time  </li>
                                        <li>Established a new communication architecture involving Modbus TCP/IP and Ethernet connections to increase efficiency of
                                            capital project  </li>
                                        <li>Provided quick and continuous troubleshooting solutions to keep the plant running on schedule including but not limited to, switch
                                            replacement and reconfiguration of machinery  </li>
                                        <li>Recorded and performed data analysis using Excel, PI Vision to pinpoint malfunction of machinery</li>
                                        <li>Upgraded and redesigned PLC/HMI controls to increase performance of the industry by optimizing cooling system </li>
                                    </div>
                                </div>

                            </div>

                            <div class="card">
                                <div class="info" >
                                    <h3 class="title">Teaching Assistant 08/2021-12/2022</h3>
                                    <div class="tab" >
                                        <li>Lead discussions with 30 students to enhance understanding of material such as Kirchhoff’s Law, Voltage and Current divider,
                                            DC, and AC circuits  </li>
                                        <li>Conducted review sessions for exams and homework  </li>
                                        <li>Received positive feedback from all 80+ students out of 120  </li>
                                        <li>Supervised lecture hall of over 120 students to provide adequate help during in-class assignment</li>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </article>


            <article class="article">
                <div class="adnane-container">
                    <h2>Connect with me here! </h2>

                    <ul class="social" >

                    <li><a href="mailto: ezouhriadnane@outlook.com" className="fas fa-envelope"
                            target="_blank"></a></li>

                        <li><a href="https://www.linkedin.com/in/adnane-ezouhri/" className="icon brands fa-linkedin-in"
                            target="_blank"><span className="label">LinkedIn</span></a></li>

                        <li><a href="https://github.com/aezouhri" className="icon brands fa-github" target="_blank"> <span
                            class="label">Github</span></a></li>

                        <li><a href="https://www.instagram.com/adnane971/" className="icon brands fa-instagram"
                            target="_blank"><span class="label">Instagram</span></a></li>
                    </ul>
                    <footer>
                        <ul id="copyright">
                            <a>Copyright &copy; 2022 Adnane Ezouhri</a>

                        </ul>
                    </footer>
                </div>



            </article>





        </body>


    );
};

export default Adnane;
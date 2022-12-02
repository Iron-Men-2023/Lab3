import React,{useState} from 'react';
import "./BensPage.css";
import {Document,Page} from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from '../assets/pdf/DeSollar_Ben_Resume.pdf'
import electionPic from "../assets/img/ElectionSystemScreenshot.png";
import machineLearningPic from "../assets/img/MLProjectPic.png";
import vaccinePic from "../assets/img/VaccineProjectScreenshot.png";
import benPic from "../assets/img/headshot.png";
import PageWithComments from "./PageWithComments";
import resume from "../assets/pdf/DeSollar_Ben_Resume.pdf";
function BensPage(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [file, setFile] = useState(pdfFile);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }
    return (
    <div className="page">

    <body id="page-top">
        <header className="masthead">
            <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                    <div className="text-center">
                        <h1 className="mx-auto my-0 text-uppercase">Ben DeSollar</h1>
                        <h2 className="text-white-50 mx-auto mt-2 mb-5">Personal website about Ben DeSollar with Resume,
                            Projects, and contact info</h2>
                        <a className="btn btn-primary" href="#about">Get Started</a>
                    </div>
                </div>
            </div>
        </header>
        <section className="about-section text-center" id="about">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-lg-8">
                        <h2 className="text-white mb-4">About Me</h2>
                        <p className="text-white-50">
                            My name is Ben DeSollar, and I am a senior at the University of Iowa, majoring in Computer
                            Science and Engineering.
                            I am currently on the Software Engineering track and enrolled in the UIowa CS U2G program,
                            which is an MCS degree.
                            Expected undergraduate graduation in May 2023 and graduate graduation in May 2024. My
                            interests lie in web application
                            development as well as in machine learning. Open to all opportunities to learn new skills
                            and connect with various individuals.
                        </p>
                        <div className="justify-content-center">
                            <img src={benPic} className="img-fluid mb-3 mb-lg-0" alt="..."/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="about-section text-center" id="resume">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <h1 className="text-white mb-4">Resume</h1>
                    <a href={resume} target="_blank" className="resume-button"> Download my resume here! </a>
                    {/*<embed src="../assets/pdf/DeSollar_Ben_Resume.pdf" width="500px" height="900px"/>*/}
                </div>
            </div>
        </section>
        <section className="projects-section bg-light" id="projects">
            <div className="container px-4 px-lg-5">
                <div className="justify-content-center">
                    <h1 className="text-black mb-4">Projects</h1>
                </div>
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div className="col-xl-8 col-lg-7">
                        <img src={machineLearningPic} className="img-fluid mb-3 mb-lg-0" alt="..."/>
                    </div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4><a href="https://github.com/bdesollar/MLProject" target="_blank"
                                   rel="noopener noreferrer">ML Project</a></h4>
                            <p className="text-black-50 mb-0">Machine Learning Project that compares the multiple models
                                and uses the best one to
                                predict values.</p>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div className="col-lg-6">
                        <img src={electionPic} className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4><a href="https://github.com/bdesollar/ElectionProject" target="_blank"
                                           rel="noopener noreferrer">Election System</a></h4>
                                    <p className="mb-0 text-white-50">Web Application Designed to create, manage, and
                                        vote in elections.</p>
                                    <hr className="d-none d-lg-block mb-0 ms-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row gx-0 justify-content-center">
                    <div className="col-lg-6">
                        <img src={vaccinePic} className="img-fluid" alt="..."/>
                    </div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4><a href="https://github.com/bdesollar/VaccineProject" target="_blank"
                                           rel="noopener noreferrer">Vaccine Confirmation System</a></h4>
                                    <p className="mb-0 text-white-50">This project was designed to confirm vaccination
                                        status or exemption for individuals at company or public events.</p>
                                    <hr className="d-none d-lg-block mb-0 me-0"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="comment-section">
                <PageWithComments/>
            </div>
        </section>

        <section className="contact-section bg-black" id="contact">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5">
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-school text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">School</h4>
                                <hr className="my-4 mx-auto"/>
                                <div className="small text-black-50"><a href="https://ece.engineering.uiowa.edu/">University
                                    of Iowa College of Engineering</a></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-envelope text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Email</h4>
                                <hr className="my-4 mx-auto"/>
                                <div className="small text-black-50"><a
                                    href="mailto:ben.desollar01@gmail.com">ben.desollar01@gmail.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3 mb-md-0">
                        <div className="card py-4 h-100">
                            <div className="card-body text-center">
                                <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                <h4 className="text-uppercase m-0">Phone</h4>
                                <hr className="my-4 mx-auto"/>
                                <div className="small text-black-50">+1 (630) 723-1447</div>
                            </div>
                        </div>
                    </div>
                </div>
                <br></br>
                <div className="social d-flex justify-content-center">
                    <a className="mx-2" href="https://github.com/bdesollar"><i className="fab fa-github"></i></a>
                    <a className="mx-2" href="https://www.linkedin.com/in/ben-desollar/"><i
                        className="fab fa-linkedin"></i></a>
                </div>
            </div>
        </section>
        <footer className="footer bg-black small text-center text-white-50">
            <div className="container px-4 px-lg-5">Copyright &copy;Ben DeSollar Website 2022</div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="../../js/scripts.js"></script>

        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </body>
    </div>
    )
}

export default BensPage;
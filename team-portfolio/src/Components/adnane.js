import React from 'react';
import profile from "../images/Adnane-profile-picture.jpg"
import french from "../images/French flag.png"
import morocco from "../images/Moroccan flag.png"
import states from "../images/States flag.png"
import undergrad from "../images/Undergrad-icon.jpg"
import master from "../images/master-icon-20.jpg"

import './adnane.css'
import { Slide } from 'react-slideshow-image';

import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';



const Adnane = () => {
	return (
		<body>
			<article class="article">
				<div class="adnane-container">
					<div class="circle" >
						<img src={profile} />
					</div>

					<div class="adnane-text-area">
						<header>
							<h1>Hello there, it's <b>Adnane Ezouhri</b>.</h1>
						</header>
						<p>I'm an <strong>Electrical and Computer Engineer</strong> in the Iron-Men team!</p>
					</div>
				</div>
			</article>

			<article class="article" >
				<div class="adnane-container">
					<div class="adnane-text-area">
						<header>
							<h2> A little to know about me...</h2>
						</header>
						<Slide>
							<div className="each-slide-effect">
								<div style={{ 
									backgroundImage: `url(${french})` }}>
									<span>Slide 1</span>
								</div>
							</div>
							<div className="each-slide-effect">
								<div style={{ 'backgroundImage': `url(${morocco})` }}>
									<span>Slide 2</span>
								</div>
							</div>
							<div className="each-slide-effect">
								<div style={{ 'backgroundImage': `url(${states})` }}>
									<span>Slide 3</span>
								</div>
							</div>
						</Slide>
					</div>
				</div>
			</article>

			<article class="article">
				<div class="adnane-container">
				<h1> My Education</h1>
					<div class="row aln-center">
						<div class="col-4 col-6-medium col-12-small">
							<section class="box-style1">
								<div class="image-fit"><img src={undergrad}/></div>
								<h3><u><a>B.S.E Electrical & Computer Engineering</a></u></h3>
								<u><a href="https://catalog.registrar.uiowa.edu/liberal-arts-sciences/computer-science/computer-science-minor/"
								target="_blank" style={{"color": 'black'}}>
								<p style={{"margin":'2.5%'}}>Computer Science Minor</p>
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
								target="_blank" style={{"color":'black'}}>
								<p style={{"margin":'3%'}}>U2G Program</p>
							</a></u>
						University of Iowa
						<p>August 2019 - May 2023</p>
						</section>
						</div>
					</div>
				</div>
			</article>

			

		<article>
		<div class="adnane-container">
			<h2>Connect with me here! </h2>

			<ul class="social" >
				<li><a href="mailto: ezouhriadnane@outlook.com" class="fas fa-inbox" ></a></li>
				<li><a href="https://www.linkedin.com/in/adnane-ezouhri/" class="icon brands fa-linkedin-in"
						target="_blank"><span class="label">LinkedIn</span></a></li>
				<li><a href="https://github.com/aezouhri" class="icon brands fa-github" target="_blank"><span
							class="label">Github</span></a></li>
				<li><a href="https://www.instagram.com/adnane971/" class="icon brands fa-instagram"
						target="_blank"><span class="label">Instagram</span></a></li>
			</ul>


			<footer>
				<ul id="copyright">
					<li>Copyright &copy; 2022 Adnane Ezouhri</li>
				</ul>
			</footer>
		</div>
	</article>

			


		</body>


	);
};

export default Adnane;
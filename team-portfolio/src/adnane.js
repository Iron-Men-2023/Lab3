import React from 'react';
import profile from "./images/Adnane-profile-picture.jpg"
import french from "./images/French flag.png"
import morocco from "./images/Moroccan flag.png"
import states from "./images/States flag.png"
import undergrad from "./images/Undergrad-icon.jpg"
import master from "./images/master-icon-20.jpg"

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

			<article class="article">
				<div class="adnane-container">
					<div class="adnane-text-area">
						<header>
							<h2> A little to know about me...</h2>
						</header>
						<Slide>
							<div className="each-slide-effect">
								<div style={{ backgroundImage: `url(${french})` }}>
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
					<div class="row aln-center">
						<div class="col-4 col-6-medium col-12-small">
							<section class="box-style1">
								<div class="image-fit"><img src={undergrad}/></div>
								<h3><u><a>B.S.E Electrical & Computer Engineering</a></u></h3>
							</section>
						</div>
						<div class="col-4 col-6-medium col-12-small">
						<section class="box-style1">
								<div class="image fit"><img src={master} /></div>
								<h3><u><a>M.S Electrical & Computer Engineering</a></u></h3>
						</section>
						</div>

					</div>
				</div>
			</article>

			


		</body>


	);
};

export default Adnane;
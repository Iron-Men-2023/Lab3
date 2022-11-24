import React from 'react';
import profile from "./images/Adnane-profile-picture.jpg"
import './adnane.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const Adnane = () => {
	const images = [
		"team-portfolio/src/images/French flag.png",
		"https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
		"https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
	];

	return (
		<body>
			<article class="article">
				<div class="intro-container">
					<div class="circle" >
						<img src={profile} />
					</div>

					<div class="intro-text-area">
						<header>
							<h1>Hello there, it's <b>Adnane Ezouhri</b>.</h1>
						</header>
						<p>I'm an <strong>Electrical and Computer Engineer</strong> in the Iron-Men team!</p>
					</div>
				</div>
			</article>

			<article class="article">
				<div class="intro-container">
					<div class="intro-text-area">
						<header>
							<h2> A little to know about me...</h2>
						</header>
						<Slide>
							<div className="each-slide-effect">
								<div style={{ backgroundImage: `url(${profile})` }}>
									<span>Slide 1</span>
								</div>
							</div>
							<div className="each-slide-effect">
								<div style={{ 'backgroundImage': `url(${images[1]})` }}>
									<span>Slide 2</span>
								</div>
							</div>
							<div className="each-slide-effect">
								<div style={{ 'backgroundImage': `url(${images[2]})` }}>
									<span>Slide 3</span>
								</div>
							</div>
						</Slide>
					</div>
				</div>
			</article>


		</body>


	);
};

export default Adnane;
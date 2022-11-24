import React from 'react';
import profile from "./images/Adnane-profile-picture.jpg"
import './adnane.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const slideImages = [
	{
		url: './image/French-flag.png',
		caption: 'Slide 1'
	},
	{
		url: './image/Moroccan-flag.png',
		caption: 'Slide 2'
	},
	{
		url: {profile},
		caption: 'Slide 3'
	},
];

const Adnane = () => {
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

					</div>
				</div>
			</article>

			<div className="slide-container">
							<Slide>
								{slideImages.map((slideImage, index) => (
									<div className="each-slide" key={index}>
										<div style={{ 'backgroundImage': `url(${slideImage.url})` }}>
											<span>{slideImage.caption}</span>
										</div>
									</div>
								))}
							</Slide>
						</div>
		</body>


	);
};

export default Adnane;
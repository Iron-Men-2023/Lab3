import React from 'react';
import profile from "./images/Adnane-profile-picture.jpg"
import './adnane.css'
const Adnane = () => {
  return (
<body> 
<article class="article">
		<div class="intro-container">
				<div class="circle" >
					<img src={profile}/>
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
				<div className="slideshow">
      				<div className="slideshowSlider">
        				<div className="slide">

						</div>
      				</div>
    			</div>
			</div>
		</div>
</article>

</body>


  );
};
  
export default Adnane;
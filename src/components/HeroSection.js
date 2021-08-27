import React from 'react';

function HeroSection() {
  return (
    <div className="hero-container">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="videos/video-4.mp4" type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>

      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary__text heading-primary__text--main">
            Making Life an Adventure
          </span>
          <span className="heading-primary__text heading-primary__text--sub">
            What are you waiting for?
          </span>
        </h1>
        <a href="#" className="btn">
          GET STARTED
        </a>
      </div>
    </div>
  );
}

export default HeroSection;

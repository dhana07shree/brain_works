import React from 'react';
import doctorImage from '../assets/finaldoc.png';

function Hero({ scrollToSection }) {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${doctorImage})` }}
    >
      <div className="hero-content">
        <button className="liveLife-btn">
          Live Your Life
        </button>

        <h1>We Care About Your Health</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <button
          className="contact-btn"
          onClick={() => scrollToSection('footer')}
        >
          Contact Us
        </button>
      </div>
    </section>
  );
}

export default Hero;

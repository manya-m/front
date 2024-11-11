import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* <nav className="navbar">Constitution</nav> */}
      <div className="landing-content">
        <h1>Learn About The Indian Constitution</h1>
        <p>
          Discover India’s diversity through our immersive, map-based platform.
          With engaging content, smooth navigation, and a sleek dark theme,
          learning about India has never been more captivating.
        </p>
        <Link to="/auth">
          <button className="cta-button">Get Started</button>
        </Link>
      </div>
      <div className="chatbot-container">
        <p>Need more assistance? Use our AI</p>
        <a
          href="https://peeyushkrsit.github.io/Constitution-Genie/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="chatbot-button">Chatbot Assistance</button>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;

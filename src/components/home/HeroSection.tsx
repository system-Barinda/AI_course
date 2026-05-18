// HeroSection.jsx
import React from "react";
import "./HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <nav className="navbar">
        <div className="logo">IPSUM</div>

        <ul className="nav-links">
          <li>Services</li>
          <li>Work</li>
          <li>Process</li>
          <li>About</li>
        </ul>

        <button className="project-btn">START PROJECT</button>
      </nav>

      <div className="hero-content">
        <div className="left-content">
          <h1>
            WE BUILD <br />
            BRANDS <br />
            THAT <span>DOMINATE</span>
          </h1>

          <p>
            Data-driven strategies, bold creative, and performance
            marketing that scales your business beyond expectations.
            <br />
            No fluff. Just results.
          </p>

          <div className="hero-buttons">
            <button className="call-btn">
              GET FREE STRATEGY CALL
            </button>

            <button className="work-btn">
              VIEW OUR WORK →
            </button>
          </div>
        </div>

        <div className="right-content">
          <div className="stat-box">
            <h2>500+</h2>
            <p>CAMPAIGNS LAUNCHED</p>
          </div>

          <div className="stat-box orange">
            <h2>12X</h2>
            <p>AVERAGE ROI DELIVERED</p>
          </div>

          <div className="stat-box">
            <h2>98%</h2>
            <p>CLIENT RETENTION RATE</p>
          </div>
        </div>
      </div>

      <div className="bottom-bar">
        <span>PERFORMANCE MARKETING</span>
        <span>BRAND STRATEGY</span>
        <span>PAID SOCIAL</span>
        <span>SEO & CONTENT</span>
        <span>CREATIVE DIRECTION</span>
        <span>WEB DESIGN</span>
      </div>
    </section>
  );
}

export default HeroSection;
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

/* HeroSection.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hero {
  min-height: 100vh;
  background: black;
  color: white;
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;
}

/* Background Glow */
.hero::before {
  content: "";
  position: absolute;
  width: 500px;
  height: 500px;
  background: #c6ff00;
  filter: blur(140px);
  opacity: 0.4;
  bottom: -100px;
  right: -100px;
}

.hero::after {
  content: "";
  position: absolute;
  width: 300px;
  height: 300px;
  background: #c6ff00;
  filter: blur(120px);
  opacity: 0.3;
  top: 50px;
  left: 150px;
}

/* Navbar */
.navbar {
  width: 100%;
  padding: 25px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 10;
}

.logo {
  font-size: 30px;
  font-weight: bold;
  color: #d7ff00;
}

.nav-links {
  display: flex;
  gap: 40px;
  list-style: none;
  text-transform: uppercase;
  font-size: 14px;
  color: #ccc;
}

.nav-links li {
  cursor: pointer;
  transition: 0.3s;
}

.nav-links li:hover {
  color: #d7ff00;
}

.project-btn {
  background: #d7ff00;
  color: black;
  border: none;
  padding: 14px 24px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.project-btn:hover {
  transform: scale(1.05);
}

/* Hero Content */
.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 80px 60px;
  position: relative;
  z-index: 10;
}

/* Left Side */
.left-content {
  max-width: 650px;
}

.left-content h1 {
  font-size: 90px;
  line-height: 0.95;
  font-weight: 900;
}

.left-content h1 span {
  color: #d7ff00;
}

.left-content p {
  margin-top: 30px;
  color: #aaa;
  line-height: 1.8;
  max-width: 550px;
  font-size: 16px;
}

.hero-buttons {
  margin-top: 40px;
  display: flex;
  gap: 20px;
}

.call-btn {
  background: #d7ff00;
  color: black;
  border: none;
  padding: 16px 24px;
  font-weight: bold;
  cursor: pointer;
}

.work-btn {
  background: transparent;
  color: white;
  border: 1px solid #333;
  padding: 16px 24px;
  cursor: pointer;
}

/* Right Side */
.right-content {
  display: flex;
  flex-direction: column;
  gap: 35px;
}

.stat-box {
  border-left: 4px solid #d7ff00;
  padding-left: 20px;
}

.orange {
  border-left: 4px solid orangered;
}

.stat-box h2 {
  font-size: 60px;
  margin-bottom: 10px;
}

.stat-box p {
  color: #888;
  font-size: 14px;
  letter-spacing: 1px;
}

/* Bottom Bar */
.bottom-bar {
  width: 100%;
  background: #d7ff00;
  color: black;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  font-weight: bold;
  font-size: 14px;
  position: relative;
  z-index: 10;
}

/* Responsive */
@media (max-width: 1000px) {
  .hero-content {
    flex-direction: column;
    gap: 60px;
  }

  .left-content h1 {
    font-size: 65px;
  }

  .bottom-bar {
    flex-wrap: wrap;
    gap: 15px;
  }
}

@media (max-width: 700px) {
  .navbar {
    flex-direction: column;
    gap: 20px;
  }

  .nav-links {
    gap: 20px;
  }

  .left-content h1 {
    font-size: 48px;
  }

  .hero-content {
    padding: 40px 25px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .bottom-bar {
    font-size: 12px;
    text-align: center;
  }
}
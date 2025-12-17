import React from "react";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <section className="footer-brand">
          <h2>PHANTOM</h2>
          <p>
            Redefining Luxury In Automotive Excellence Since 1925. Experience
            The Epitome Of Sophistication And Performance.
          </p>
        </section>
        <nav className="footer-nav" aria-labelledby="quick-links-heading">
          <h2 id="quick-links-heading">Quick Links</h2>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#vehicle">Vehicle</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <nav className="footer-nav" aria-labelledby="legal-heading">
          <h2 id="legal-heading">Legal</h2>
          <ul>
            <li>
              <a href="#privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="#terms-of-service">Terms of Services</a>
            </li>
            <li>
              <a href="#contact">Cookie Policy</a>
            </li>
          </ul>
        </nav>
        <section className="footer-newsletter">
          <h2>Newsletter</h2>
          <p>Subscribe To Our Newsletter For Exclusive Updates And Offers.</p>
        </section>
      </div>
      <p className="footer-bottom">
        &copy; 2025 PHANTOM Luxury Vehicles. All Rights Reserved.
      </p>
    </footer>
  );
}

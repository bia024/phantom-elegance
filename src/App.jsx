import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Home from "./Home/Home";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import "./style.css";
import heroBackground from "./assets/hero-bg.png";

export default function App() {
  const scrollToModels = () => {
    const section = document.getElementById("car-models-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToContact = () => {
    const section = document.getElementById("contact-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <Header />
      <Hero
        button1Text="Explore Models"
        onButton1Click={scrollToModels}
        onButton2Click={scrollToContact}
        button3Text="start 16 ROLLS ROYCE DAWN CONVERSÍVEL INTERRUPTOR DE TOQUE FRONTAL MÓDULO DE CONTROLE JOYSTICK"
        onButton3Click={() => {}}
        backgroundImage={heroBackground}
      />
      <Home />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

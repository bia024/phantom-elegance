import React from "react";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Home from "./Home/Home";
import Experience from "./Experience/Experience";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import "./style.css";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Home />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

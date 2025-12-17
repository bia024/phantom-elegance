import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <section className="banner-hero">
      <article className="article-hero">
        <h1>Experience Unmatched Luxury</h1>
        <h3 className="discoverHero">
          Discover The Epitome Of Automotive Excellence
        </h3>
      </article>
      <div>
        <button className="btn-1">Explore Vehicle</button>
        <button className="btn-2">Contact Us</button>
      </div>
    </section>
  );
}

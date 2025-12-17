import React from "react";
import "./Experience.scss";
import ImgInterior from "../assets/interior-carro.png";
import ImgEstrada from "../assets/carro-estrada.png";
import ImgSelect from "../assets/select-phantom.png";

export default function Experience() {
  const phantomModels = [
    {
      id: 1,
      name: "Phantom Ghost",
      price: "Starting At $350,000",
      image: ImgSelect,
      features: [
        "6.75L V12 Twin-Turbo Engine",
        "563 Horsepower",
        "Starlight Headliner",
        "Bespoke Audio System",
      ],
    },
    {
      id: 2,
      name: "Phantom Spectre",
      price: "Starting At $450,000",
      image: ImgSelect,
      features: [
        "All-Electric Powertrain",
        "577 Horsepower",
        "Iconic Illuminated Grille",
        "Advanced Driver Assistance",
      ],
    },
    {
      id: 3,
      name: "Phantom Cullinan",
      price: "Starting At $400,000",
      image: ImgSelect,
      features: [
        "6.75L V12 Twin-Turbo Engine",
        "All-Wheel Drive System",
        "Panoramic Sunroof",
        "Deployable Picnic Seats",
      ],
    },
  ];

  return (
    <>
      <section className="phantom-experience">
        <article className="article-experience">
          <h2 className="title-experience">The PHANTOM Experience</h2>
          <p className="description-experience">
            For Over A Century, PHANTOM Has Stood As The Pinnacle Of Automotive
            Luxury. Our Vehicles Are Not Merely Modes Of Transportation, They
            Are Masterpieces Of Engineering And Design, Crafted For Those Who
            Demand Nothing But Excellence. Each PHANTOM Vehicle Is Meticulously
            Handcrafted By Our Master Artisans, Ensuring Unparalleled Quality
            And An Experience That Transcends Ordinary Luxury.
          </p>
          <button className="discover-button">Discover Our Legacy</button>
        </article>
      </section>

      <section className="conheca">
        <div className="caixa-principal">
          <img src={ImgInterior} alt="Interior do Carro" />
          <div className="caixa-interior">
            <h3>Unmatched Interior Luxury</h3>
            <p>
              Step inside a PHANTOM and immerse yourself in a world of
              unparalleled luxury. Our interiors feature the finest
              hand-selected materials, from supple leather to exotic woods and
              metals. Every detail is meticulously crafted to create an
              environment that soothes the senses and elevates the driving
              experience.
            </p>
            <ul>
              <li>Hand-stitched premium leather upholstery</li>
              <li>Customizable ambient lighting system</li>
              <li>State-of-the-art climate control</li>
            </ul>
          </div>
        </div>
        <div className="caixa-exceptional">
          <div className="caixa-texto-performance">
            <h3>Exceptional Performance</h3>
            <p>
              PHANTOM vehicles deliver power with poise. Our advanced
              engineering ensures a driving experience that is both exhilarating
              and refined. From the responsive acceleration to the whisper-quiet
              cabin, every aspect of performance has been optimized to provide
              an unmatched driving experience.
            </p>
            <ul>
              <li>Powerful yet efficient engines</li>
              <li>Adaptive suspension system</li>
              <li>Precision handling and control</li>
            </ul>
          </div>
          <img src={ImgEstrada} alt="Carro na estrada" />
        </div>
      </section>

      <section className="select-your-phantom">
        <h2>Select Your PHANTOM</h2>
        <p className="description-choose">
          Choose The Perfect PHANTOM That Matches Your Lifestyle And
          Preferences.
        </p>

        <div className="card-container">
          {phantomModels.map((model) => (
            <div className="card" key={model.id}>
              <img src={model.image} alt={model.name} className="card-image" />
              <div className="card-body">
                <h3>{model.name}</h3>
                <p>{model.price}</p>
                <ul>
                  {model.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
                <button>Order Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

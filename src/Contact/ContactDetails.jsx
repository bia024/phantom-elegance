import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function ContactDetails() {
  const position = [40.7128, -74.006];
  const [mapTheme, setMapTheme] = useState("dark");

  const themes = {
    light: {
      url: "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    },
    dark: {
      url: "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    },
  };

  const toggleMapTheme = () => {
    setMapTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className="contact-right">
      <div className="map-container">
        <button onClick={toggleMapTheme} className="map-theme-toggle">
          Switch to {mapTheme === "dark" ? "Light" : "Dark"} Map
        </button>
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          aria-label="Map showing showroom location"
        >
          <TileLayer key={mapTheme} {...themes[mapTheme]} />
          <Marker position={position}>
            <Popup>
              Phantom Luxury Showroom <br /> 123 Luxury Lane, New York.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <article className="site-visit-article">
        <h2>Visit Our Showroom</h2>
        <h3>Address</h3>
        <ul>
          <li>123 Luxury Lane, Prestige District</li>
          <li>New York, NY 10001</li>
        </ul>
        <h3>Email</h3>
        <ul>
          <li>Contact@phantom-luxury.com</li>
        </ul>
        <h3>Hours</h3>
        <ul>
          <li>Monday - Friday: 9AM - 8PM</li>
          <li>Saturday: 10AM - 6PM</li>
          <li>Sunday: By Appointment</li>
        </ul>
      </article>
    </div>
  );
}

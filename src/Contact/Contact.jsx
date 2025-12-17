import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./Contact.scss";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetinaUrl,
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <ContactForm />
        <ContactDetails />
      </div>
    </section>
  );
}

import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // nao esquecer da logica do EMAILJS ou outro servico de envio de email aqui
    console.log("Form data submitted:", formData);
    alert("Thank you for your message!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-left">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <h3 className="contact-legend">Send Us A Message</h3>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>
      </form>
    </div>
  );
}

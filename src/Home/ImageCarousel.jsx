import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";

import Image1 from "../assets/rolls-cullinan-frente.png";
import Image2 from "../assets/rolls-ghost-frente.png";
import Image3 from "../assets/spectre-frente.png";
import Image4 from "../assets/rolls-shadow.png";
import Image5 from "../assets/rolls-wraith.png";
import Image6 from "../assets/rolls-dawn.png";

import "./ImageCarousel.scss";

export default function ImageCarousel() {
  const carouselImages = [
    {
      id: 1,
      src: Image1,
      alt: "Phantom Exterior View",
      title: "Sculpted Presence",
      subtitle: "An icon of modern design.",
    },
    {
      id: 2,
      src: Image2,
      alt: "Phantom Interior Detail",
      title: "Unrivaled Craftsmanship",
      subtitle: "Every detail, meticulously perfected.",
    },
    {
      id: 3,
      src: Image3,
      alt: "Phantom Wheel Detail",
      title: "Effortless Power",
      subtitle: "Performance that feels limitless.",
    },
    {
      id: 4,
      src: Image4,
      alt: "Phantom Front View",
      title: "Commanding Stance",
      subtitle: "A statement of arrival.",
    },
    {
      id: 5,
      src: Image5,
      alt: "Phantom Rear View",
      title: "Timeless Silhouette",
      subtitle: "Elegance from every angle.",
    },
    {
      id: 6,
      src: Image6,
      alt: "Phantom Side View",
      title: "Bespoke Details",
      subtitle: "Personalized to your exact vision.",
    },
  ];

  return (
    <>
      <section className="elegance-carousel-section">
        <h2 className="carousel-title">Phantom Elegance</h2>
        <p className="carousel-subtitle">
          Discover the artistry in every detail.
        </p>
        <Swiper
          modules={[Navigation, Pagination, EffectFade, Autoplay]}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={{ clickable: true }}
          className="phantom-carousel"
        >
          {carouselImages.map((image) => (
            <SwiperSlide key={image.id}>
              <div className="carousel-slide-content">
                <img src={image.src} alt={image.alt} />
                <div className="carousel-text-overlay">
                  <h3 className="carousel-image-title">{image.title}</h3>
                  <p className="carousel-image-subtitle">{image.subtitle}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

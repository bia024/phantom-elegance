import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

export default function GalleryModal({ model, onClose }) {
  if (!model) return null;

  return (
    <div className="gallery-modal-overlay" onClick={onClose}>
      <div
        className="gallery-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="gallery-modal-close" onClick={onClose}>
          &times;
        </button>
        <h2 className="gallery-modal-title">{model.name}</h2>
        <Swiper
          modules={[Navigation, Pagination, Thumbs]}
          loop={true}
          spaceBetween={10}
          navigation={true}
          pagination={{ clickable: true }}
          className="gallery-swiper"
        >
          {model.galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={`${model.name} - view ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <p className="gallery-modal-description">{model.description}</p>
      </div>
    </div>
  );
}

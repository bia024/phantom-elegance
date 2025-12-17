import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./Home.scss";
import ImageCarousel from "../Home/ImageCarousel.jsx";
import GalleryModal from "./GalleryModal.jsx";

import GhostCover from "../assets/rolls-ghost-frente.png";
import CullinanCover from "../assets/rolls-cullinan-frente.png";
import SpectreCover from "../assets/spectre-frente.png";
import ShadowCover from "../assets/rolls-shadow.png";
import WraithCover from "../assets/rolls-wraith.png";
import DawnCover from "../assets/rolls-dawn.png";
import CornicheCover from "../assets/rolls-corniche.png";

import CullinanGallery1 from "../assets/rolls-cullinan-frente.png";
import CullinanGallery2 from "../assets/rolls-cullinan-lado.png";
import CullinanGallery3 from "../assets/rolls-cullinan-traseira.png";
import CullinanGallery4 from "../assets/rolls-cullinan-costas.png";

import GhostGallery1 from "../assets/rolls-ghost-frente.png";
import GhostGallery2 from "../assets/rolls-ghost-perfil.png";
import GhostGallery3 from "../assets/rolls-ghost-lado.png";
import GhostGallery4 from "../assets/rolls-ghost-traseira.png";

import SpectreGallery1 from "../assets/spectre-frente.png";
import SpectreGallery2 from "../assets/rolls-spectre-perfil.png";
import SpectreGallery3 from "../assets/rolls-spectre-lado.png";
import SpectreGallery4 from "../assets/rolls-spectre-traseira.png";
import SpectreGallery5 from "../assets/rolls-spectre-costas.png";

import ShadowGallery1 from "../assets/rolls-shadow.png";
import ShadowGallery2 from "../assets/rolls-shadow-perfil.png";
import ShadowGallery3 from "../assets/rolls-shadow-lado.png";
import ShadowGallery4 from "../assets/rolls-shadow-costas.png";

import WraithGallery1 from "../assets/rolls-wraith.png";
import WraithGallery2 from "../assets/rolls-wraith-perfil.png";
import WraithGallery3 from "../assets/rolls-wraith-traseira.png";
import WraithGallery4 from "../assets/rolls-wraith-costas.png";

import DawnGallery1 from "../assets/rolls-dawn.png";
import DawnGallery2 from "../assets/rolls-dawn-perfil.png";
import DawnGallery3 from "../assets/rolls-dawn-lado.png";
import DawnGallery4 from "../assets/rolls-dawn-costas.png";

import CornicheGallery1 from "../assets/rolls-corniche-perfil.png";
import CornicheGallery2 from "../assets/rolls-corniche-lado.png";
import CornicheGallery3 from "../assets/rolls-corniche-traseira.png";
import CornicheGallery4 from "../assets/rolls-corniche-costas.png";

export default function Home() {
  const [selectedModel, setSelectedModel] = useState(null);

  const models = [
    {
      id: "cullinan",
      name: "Cullinan",
      description:
        "Effortless, everywhere. The Cullinan is the ultimate luxury SUV, combining versatility with signature Phantom refinement.",
      coverImage: CullinanCover,
      galleryImages: [
        { src: CullinanGallery1, alt: "Cullinan Front" },
        { src: CullinanGallery2, alt: "Cullinan Wheel" },
        { src: CullinanGallery3, alt: "Cullinan Rear" },
        { src: CullinanGallery4, alt: "Cullinan Back" },
      ],
    },
    {
      id: "ghost",
      name: "Ghost",
      description:
        "The purest expression of Phantom, the Ghost is a testament to minimalist design and effortless performance.",
      coverImage: GhostCover,
      galleryImages: [
        { src: GhostGallery1, alt: "Ghost Front" },
        { src: GhostGallery2, alt: "Ghost Wheel" },
        { src: GhostGallery3, alt: "Ghost Lado" },
        { src: GhostGallery4, alt: "Ghost Traseira" },
      ],
    },
    {
      id: "spectre",
      name: "Spectre",
      description:
        "The Spectre marks Phantom's bold new chapter, an all-electric vehicle with an imperious presence.",
      coverImage: SpectreCover,
      galleryImages: [
        { src: SpectreGallery1, alt: "Spectre Front" },
        { src: SpectreGallery2, alt: "Spectre Interior" },
        { src: SpectreGallery3, alt: "Spectre Side" },
        { src: SpectreGallery4, alt: "Spectre Rear" },
        { src: SpectreGallery5, alt: "Spectre Back" },
      ],
    },
    {
      id: "shadow",
      name: "Shadow",
      description:
        "A timeless classic reborn with modern engineering and silent composure.",
      coverImage: ShadowCover,
      galleryImages: [
        { src: ShadowGallery1, alt: "Shadow Front" },
        { src: ShadowGallery2, alt: "Shadow Profile" },
        { src: ShadowGallery3, alt: "Shadow Side" },
        { src: ShadowGallery4, alt: "Shadow Back" },
      ],
    },
    {
      id: "wraith",
      name: "Wraith",
      description:
        "The most powerful and dynamic Phantom in history, a true driver's car.",
      coverImage: WraithCover,
      galleryImages: [
        { src: WraithGallery1, alt: "Wraith Front" },
        { src: WraithGallery2, alt: "Wraith Interior" },
        { src: WraithGallery3, alt: "Wraith Side" },
        { src: WraithGallery4, alt: "Wraith Back" },
      ],
    },
    {
      id: "dawn",
      name: "Dawn",
      description:
        "Experience the world in open-top luxury. The Dawn is a social, seductive masterpiece.",
      coverImage: DawnCover,
      galleryImages: [
        { src: DawnGallery1, alt: "Dawn Wheel" },
        { src: DawnGallery2, alt: "Dawn Side" },
        { src: DawnGallery3, alt: "Dawn Rear" },
        { src: DawnGallery4, alt: "Dawn Back" },
      ],
    },
    {
      id: "Ghost",
      name: "Ghost",
      description:
        "A legendary nameplate representing the pinnacle of convertible grand touring.",
      coverImage: GhostCover,
      galleryImages: [
        { src: GhostCover, alt: "Corniche Front" },
        { src: GhostGallery1, alt: "Corniche Interior" },
      ],
    },
    {
      id: "corniche",
      name: "Corniche",
      description:
        "A legendary nameplate representing the pinnacle of convertible grand touring.",
      coverImage: CornicheCover,
      galleryImages: [
        { src: CornicheCover, alt: "Corniche Front" },
        { src: CornicheGallery1, alt: "Corniche Perfil" },
        { src: CornicheGallery2, alt: "Corniche Lado" },
        { src: CornicheGallery3, alt: "Corniche Traseira" },
        { src: CornicheGallery4, alt: "Corniche Costas" },
      ],
    },
  ];

  const handleCardClick = (model) => {
    setSelectedModel(model);
  };

  const handleCloseModal = () => {
    setSelectedModel(null);
  };

  return (
    <>
      <ImageCarousel />
      <section className="model-selection-section">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={"auto"}
          centeredSlides={true}
          loop={true}
          className="model-cards-carousel"
        >
          {models.map((model) => (
            <SwiperSlide key={model.id}>
              <div
                className="model-card"
                onClick={() => handleCardClick(model)}
              >
                <img
                  src={model.coverImage}
                  alt={model.name}
                  className="model-card-image"
                />
                <div className="model-card-overlay">
                  <h3 className="model-card-title">{model.name}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <GalleryModal model={selectedModel} onClose={handleCloseModal} />
    </>
  );
}

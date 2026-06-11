"use client";

import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface Props {
  service: {
    images: string[];
    title: string;
  };
}

const ServiceHero = ({ service }: Props) => {
  const [currentImage, setCurrentImage] = useState(0);

  // SWIPE STATE
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === service.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? service.images.length - 1 : prev - 1
    );
  };

  // TOUCH HANDLERS
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    const distance = startX - endX;
    const swipeThreshold = 50;

    if (distance > swipeThreshold) {
      nextImage(); // swipe left
    }

    if (distance < -swipeThreshold) {
      prevImage(); // swipe right
    }
  };

  return (
    <>
      {/* IMAGE CAROUSEL */}
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={service.images[currentImage]}
          alt={service.title}
          className="
            w-full
            h-[350px]
            md:h-[600px]
            object-cover
            card
            select-none
          "
        />

        {/* PREV BUTTON */}
        <button
          onClick={prevImage}
          className="
            absolute
            left-2 md:left-4
            top-1/2
            -translate-y-1/2

            w-11 h-11 md:w-12 md:h-12
            rounded-full

            bg-white/30
            backdrop-blur-md
            border border-white/40

            shadow-lg

            flex items-center justify-center

            text-white

            transition-all duration-300 ease-out
            hover:scale-110
            hover:bg-white/50
            hover:shadow-xl
            active:scale-95

            focus:outline-none focus:ring-2 focus:ring-white/60
          "
        >
          <FiChevronLeft size={22} />
        </button>

        {/* NEXT BUTTON */}
        <button
          onClick={nextImage}
          className="
            absolute
            right-2 md:right-4
            top-1/2
            -translate-y-1/2

            w-11 h-11 md:w-12 md:h-12
            rounded-full

            bg-white/30
            backdrop-blur-md
            border border-white/40

            shadow-lg

            flex items-center justify-center

            text-white

            transition-all duration-300 ease-out
            hover:scale-110
            hover:bg-white/50
            hover:shadow-xl
            active:scale-95

            focus:outline-none focus:ring-2 focus:ring-white/60
          "
        >
          <FiChevronRight size={22} />
        </button>
      </div>

      {/* THUMBNAILS */}
      <div className="flex gap-3 mt-4">
        {service.images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`
              overflow-hidden
              rounded-lg
              border-2
              transition
              ${
                currentImage === index
                  ? "border-[rgb(var(--color-primary))]"
                  : "border-transparent"
              }
            `}
          >
            <img
              src={image}
              alt={`${service.title} ${index + 1}`}
              className="
                w-24
                h-24
                object-cover
              "
            />
          </button>
        ))}
      </div>

      {/* TITLE */}
      <h1 className="heading-2 mt-8 text-dark">
        {service.title}
      </h1>
    </>
  );
};

export default ServiceHero;

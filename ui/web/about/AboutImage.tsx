import React from "react";

const AboutImage: React.FC = () => {
  return (
    <div className="relative w-full max-w-xl">
      <img
        src="/img/Aboutimage.png"
        alt="Cleaner"
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
        className="w-full h-auto object-cover card undraggable"
      />
    </div>
  );
};

export default AboutImage;

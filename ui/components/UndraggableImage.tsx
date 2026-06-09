import Image, { ImageProps } from "next/image";
import React from "react";

type UndraggableImageProps = ImageProps;

const UndraggableImage: React.FC<UndraggableImageProps> = (props) => {
  return (
    <Image
      {...props}
      draggable={false}
      onDragStart={(e) => e.preventDefault()}
      className={props.className}
    />
  );
};

export default UndraggableImage;

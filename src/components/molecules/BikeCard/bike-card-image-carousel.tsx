import { useState } from "react";
import {
  BikeCardCover,
  BikeCardImagesContainer,
  BikeCardImagesCoursel,
  BikeCardImagesCourselItem,
} from "./styles";

interface BikeImageCarouselProps {
  images: string[];
  cover: string;
}

const BikeImageCarousel = ({ cover, images }: BikeImageCarouselProps) => {
  const [activeCover, setActiveCover] = useState(cover);

  return (
    <BikeCardImagesContainer>
      <BikeCardCover src={activeCover} alt="" />
      <BikeCardImagesCoursel>
        {[...images, cover].map((item) => (
          <BikeCardImagesCourselItem
            active={item === activeCover}
            onClick={() => setActiveCover(item)}
            key={item}
            src={item}
          />
        ))}
      </BikeCardImagesCoursel>
    </BikeCardImagesContainer>
  );
};

export default BikeImageCarousel;

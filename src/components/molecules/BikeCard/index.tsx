import {
  BikeCardButton,
  BikeCardContainer,
  BikeCardDescription,
  BikeCardDescriptionItem,
  BikeCardEngineName,
  BikeCardPrice,
  BikeCardTitle,
} from "./styles";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Bike } from "../../../typescript/bikes";
import BikeImageCarousel from "./bike-card-image-carousel";

interface BikeCardProps {
  bike: Bike;
}

const BikeCard = ({ bike }: BikeCardProps) => {
  const { cover, engine, features, id, images, name, price } = bike;

  return (
    <BikeCardContainer>
      <BikeCardTitle>{name}</BikeCardTitle>
      <BikeCardEngineName>{engine}</BikeCardEngineName>
      <BikeCardPrice>${price}/hora</BikeCardPrice>
      <BikeImageCarousel cover={cover} images={images} />
      <BikeCardDescription>
        {features.map((item) => (
          <BikeCardDescriptionItem key={item.title}>
            <div className="dot" />
            <p className="text">{item.title}</p>
          </BikeCardDescriptionItem>
        ))}
      </BikeCardDescription>

      <BikeCardButton>
        <AiOutlineArrowRight fontSize={35} color="#E6474B" />
      </BikeCardButton>
    </BikeCardContainer>
  );
};

export default BikeCard;

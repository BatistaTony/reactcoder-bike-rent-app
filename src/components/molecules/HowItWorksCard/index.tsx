import { HowItWorksItemType } from "../../../constants/how-it-works-data";
import {
  CardIcon,
  CardTitle,
  CartText,
  HowItWorksCardContainer,
} from "./styles";

interface HowItWorksCardProps {
  data: HowItWorksItemType;
}

const HowItWorksCard = ({ data }: HowItWorksCardProps) => (
  <HowItWorksCardContainer>
    <CardIcon>{data.icon}</CardIcon>
    <CardTitle>{data.title}</CardTitle>
    <CartText>{data.description}</CartText>
  </HowItWorksCardContainer>
);

export default HowItWorksCard;

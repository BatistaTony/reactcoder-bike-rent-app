import { HowItWorksContainer, HowItWorksList, HowItWorksTitle } from "./styles";
import { data } from "./../../../constants/how-it-works-data";
import HowItWorksCard from "../HowItWorksCard";

const HowItWorks = () => {
  return (
    <HowItWorksContainer>
      <HowItWorksTitle>COMO FUNCIONA ?</HowItWorksTitle>
      <HowItWorksList>
        {data.map((item) => (
          <HowItWorksCard data={item} key={item.title} />
        ))}
      </HowItWorksList>
    </HowItWorksContainer>
  );
};

export default HowItWorks;

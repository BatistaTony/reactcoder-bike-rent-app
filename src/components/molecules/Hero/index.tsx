import {
  BikeHeroBackground,
  HeroContainer,
  BikeHeroBackgroundOverlay,
  HeroButton,
  HeroText,
  HeroTextInfoContainer,
  HeroTitle,
} from "./styles";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroTextInfoContainer>
        <HeroTitle>ARRENDA UMA BICICLETA HOJE E GIRE A CIDADE</HeroTitle>
        <HeroText>
          The ideal bike plus concierge level support. Pay per hours.
        </HeroText>
        <HeroButton>COMEÇAR AGORA</HeroButton>
      </HeroTextInfoContainer>
      <BikeHeroBackground>
        <BikeHeroBackgroundOverlay />
      </BikeHeroBackground>
    </HeroContainer>
  );
};

export default Hero;

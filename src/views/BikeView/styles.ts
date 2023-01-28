import styled from "@emotion/styled";

export const BikePageViewContainer = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  display: flex;
  align-self: start;
  flex-direction: column;
  margin-top: 150px;
  align-items: center;
  padding-bottom: 200px;
  padding-left: 100px;
  padding-right: 100px;
`;

export const BikePageInfo = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 35% 65%;
  grid-template-rows: auto;

  .prop-info {
    width: 100%;
    height: 100%;
  }
`;

export const BikeTitle = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 71px;
  color: #000000;
  margin-bottom: 20px;
`;

export const BikeEngineName = styled(BikeTitle)`
  font-weight: 500;
  font-size: 37px;
  line-height: 24px;
  margin-bottom: 20px;
`;

export const BikePrice = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  color: #e6474b;
  margin-bottom: 20px;
`;

export const BikeCover = styled.img`
  width: 806px;
  height: 493px;
  object-fit: scale-down;
`;

export const BikeImagesCoursel = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

interface CourselItemProps {
  active: boolean;
}

export const BikeImagesCourselItem = styled.img<CourselItemProps>`
  width: 400px;
  height: 306px;
  background: #ffffff;
  box-shadow: 0px 0px 2px 2px
    ${({ active }) => (active ? "#e6474b" : " rgba(0, 0, 0, 0.3)")};
  border-radius: 2px;
  cursor: pointer;
  object-fit: cover;
  margin-right: 50px;
`;

export const BikeDescription = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 36px;
  color: #000000;
  margin-top: 50px;
`;

export const FeaturesList = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(4, 23%);
  grid-gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 20px;
`;

export const FeaturesListTitle = styled.h1`
  width: 100%;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 37px;
  color: #e6474b;

  margin-top: 50px;
`;

export const FeaturesListItem = styled.div`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  padding: 23px;

  h1 {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  p {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #000000;
  }
`;

export const ButtonRentNow = styled.div`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  color: #ffffff;
  width: 302px;
  height: 67px;
  background: #e6474b;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }
`;

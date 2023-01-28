import styled from "@emotion/styled";
import {
  BikePageInfo,
  BikeEngineName,
  BikeCover,
  BikePageViewContainer,
  BikeTitle,
} from "./../BikeView/styles";

export const RentViewContainer = styled(BikePageInfo)`
  min-height: 95vh;
  height: auto;
  grid-template-columns: 40% 60%;

  .rent-view-container {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const BikeRentTitle = styled(BikeTitle)`
  color: #e6474b;
`;

export const RentBikeDescription = styled(BikeEngineName)`
  line-height: 40px;
`;

export const RentBikeCover = styled(BikeCover)`
  width: 519px;
  height: 325px;
`;

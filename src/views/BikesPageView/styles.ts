import styled from "@emotion/styled";
import { NewBikesList } from "./../../components/molecules/NewBikes/styles";

export const BikesViewContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-self: start;
  flex-direction: column;
  margin-top: 200px;
  align-items: center;
  padding-bottom: 200px;
`;

export const BikesViewTitle = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 41px;
  line-height: 50px;
  color: #000000;
`;

export const BikesViewSubTitle = styled(BikesViewTitle)`
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

export const FilterContainer = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const BikesList = styled(NewBikesList)``;

export const PaginationContainer = styled.div`
  height: 100px;
  width: 100%;
  margin-top: 70px;
`;

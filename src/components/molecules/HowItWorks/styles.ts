import styled from "@emotion/styled";

export const HowItWorksContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 70px;
`;

export const HowItWorksTitle = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;

  color: #e6474b;
`;

export const HowItWorksList = styled.div`
  width: 80%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(3, 25%);
  margin-top: 40px;
  align-items: center;
  justify-content: center;
  grid-gap: 30px;
`;

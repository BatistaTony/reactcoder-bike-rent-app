import styled from "@emotion/styled";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  box-sizing: border-box;
  overflow-x: hidden;
  padding-left: 100px;
  padding-right: 100px;
`;

export const BikeHeroBackground = styled.div`
  width: 800px;
  height: 800px;
  position: absolute;
  background: red;
  right: -25px;
  top: -25px;
  border-radius: 50px;
  background: url(https://images.unsplash.com/photo-1565492214613-443d7dab5852?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmljaWNsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60);
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

export const BikeHeroBackgroundOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const HeroTextInfoContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
`;

export const HeroTitle = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 58px;
  line-height: 71px;
  color: #e6474b;
  margin-bottom: 30px;
`;

export const HeroText = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 37px;
  line-height: 45px;
  color: #0a0909;
  margin-bottom: 30px;
`;

export const HeroButton = styled.button`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  color: #ffffff;
  width: 267px;
  height: 67px;
  background: #e6474b;
  border-radius: 18px;
  border: none;
  outline: none;
`;

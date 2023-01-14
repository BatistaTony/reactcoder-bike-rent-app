import styled from "@emotion/styled";

export const BikeCardContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  padding: 20px;
  height: auto;
  position: relative;
`;

export const BikeCardTitle = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 49px;
  line-height: 60px;
  color: #000000;
  margin-bottom: 10px;
`;

export const BikeCardEngineName = styled(BikeCardTitle)`
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;

export const BikeCardPrice = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 73px;
  color: #e6474b;
  margin-bottom: 20px;
`;

export const BikeCardImagesContainer = styled.div`
  width: 100%;
  height: 259px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const BikeCardCover = styled.img`
  width: 366px;
  height: 259px;
  object-fit: scale-down;
`;

export const BikeCardImagesCoursel = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

interface CourselItemProps {
  active: boolean;
}

export const BikeCardImagesCourselItem = styled.img<CourselItemProps>`
  width: 43px;
  height: 43px;
  background: #ffffff;
  box-shadow: 0px 0px 2px 2px
    ${({ active }) => (active ? "#e6474b" : " rgba(0, 0, 0, 0.3)")};
  border-radius: 2px;
  cursor: pointer;
  object-fit: cover;
`;

export const BikeCardDescription = styled.ul`
  width: 100%;
  list-style: none;
`;

export const BikeCardDescriptionItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 7px;

  p {
    font-family: "Helvetica Neue";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
  }

  .dot {
    margin-right: 10px;
    width: 7px;
    height: 7px;
    border-radius: 4px;
    background: #e6474b;
  }
`;

export const BikeCardButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 30px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;
`;

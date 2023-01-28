import styled from "@emotion/styled";

export const BikeFilterContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 25% 20% 20%;
  align-items: center;
  justify-content: center;
  grid-column-gap: 20px;
`;

export const FieldContainer = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 10% 90%;
  align-items: center;
  background: #ffffff;
  border: 1px solid #ddd1d1;
  border-radius: 3px;
  overflow: hidden;

  .field-icon {
    height: 100%;
    width: 100%;
    background: #d9d9d9;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BikeFilterButton = styled.button`
  width: 136px;
  height: 60px;
  background: #e6474b;
  border-radius: 3px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
`;

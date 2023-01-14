import styled from "@emotion/styled";

export const NewBikesContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 100px 70px 100px;
`;

export const NewBikesTitle = styled.div`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 49px;
  color: #e6474b;
`;

export const NewBikesList = styled.div`
  width: 75%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 49%);
  grid-gap: 30px;
  justify-content: space-between;
  margin-top: 30px;

  .box {
    height: 500px;
    width: 100%;
    background: red;
  }
`;

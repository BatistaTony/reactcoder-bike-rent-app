import styled from "@emotion/styled";

export const BikeGalleryContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 100px 50px 100px;
`;

export const GalleryImagesContainer = styled.div`
  width: 75%;
  height: auto;
  display: grid;
  grid-template-columns: repeat(2, 49%);
  grid-template-rows: repeat(2, auto);
  justify-content: space-between;
`;

export const GalleryImagesItem = styled.img`
  width: 627px;
  height: auto;
  object-fit: scale-down;
`;

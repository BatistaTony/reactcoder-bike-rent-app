import { galleryImages } from "../../../constants/images";
import {
  BikeGalleryContainer,
  GalleryImagesContainer,
  GalleryImagesItem,
} from "./styles";

const BikesGallery = () => {
  return (
    <BikeGalleryContainer>
      <GalleryImagesContainer>
        <GalleryImagesItem src={galleryImages[0]} alt="" />
        <div />
        <div />
        <GalleryImagesItem src={galleryImages[1]} alt="" />
      </GalleryImagesContainer>
    </BikeGalleryContainer>
  );
};

export default BikesGallery;

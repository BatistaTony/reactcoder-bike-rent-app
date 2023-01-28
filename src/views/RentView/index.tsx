import PageLayout from "../../components/Layout";
import {
  RentViewContainer,
  RentBikeDescription,
  RentBikeCover,
  BikeRentTitle,
} from "./styles";
import { BikeTitle, BikePageViewContainer } from "./../BikeView/styles";
import { useRouter } from "next/router";
import { useGetBikeById } from "../../hooks/useGetBikeById";
import RentCheckout from "../../components/molecules/RentCheckout";
import { Bike } from "../../typescript/bikes";

const RentView = () => {
  const router = useRouter();

  const id =
    router.query["id"] ||
    router.asPath.match(new RegExp(`[&?]${"id"}=(.*)(&|$)`));

  const { bike, loading } = useGetBikeById({ id: id as unknown as number });

  return (
    <PageLayout title="Arrendar bicicleta">
      <BikePageViewContainer>
        <RentViewContainer>
          <div>
            <BikeRentTitle>{bike?.name}</BikeRentTitle>
            <RentBikeDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
              quae illum recusandae?
            </RentBikeDescription>
            <RentBikeCover src={bike?.cover} alt="" />
          </div>
          <div className="rent-view-container">
            <RentCheckout bike={bike as Bike} />
          </div>
        </RentViewContainer>
      </BikePageViewContainer>
    </PageLayout>
  );
};

export default RentView;

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageLayout from "../../components/Layout";
import { getBikeById } from "../../services/bikes";
import { Bike } from "../../typescript/bikes";
import { GiDutchBike } from "react-icons/gi";

import {
  BikePageViewContainer,
  BikePageInfo,
  BikeCover,
  BikeEngineName,
  BikePrice,
  BikeTitle,
  BikeImagesCoursel,
  BikeImagesCourselItem,
  BikeDescription,
  FeaturesList,
  FeaturesListItem,
  FeaturesListTitle,
  ButtonRentNow,
} from "./styles";
import GenericModal from "../../components/molecules/GenericModal";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useGetBikeById } from "../../hooks/useGetBikeById";

const BikePageView = () => {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const { isLogged } = useGetUserInfo();

  const id =
    router.query["id"] ||
    router.asPath.match(new RegExp(`[&?]${"id"}=(.*)(&|$)`));

  const { bike, loading } = useGetBikeById({ id: id as unknown as number });

  const goToRent = () => {
    if (isLogged) {
      router.push(`/rent/${(bike as Bike).id}`);
    } else {
      setShowModal(true);
    }
  };

  return (
    <PageLayout title={(bike as Bike)?.name || "carregando..."}>
      {showModal && (
        <GenericModal
          buttonPrimaryText="Entrar"
          buttonSecondaryText="Cancelar"
          type="error"
          handleCancel={() => setShowModal(false)}
          handleConfirm={() => router.push("/login")}
          description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora fugiat repudiandae minima sunt sed dignissimos dolor. Officia ad explicabo quos quidem, dolor voluptates?`}
          title="Voce precisa estar registrado para arrendar uma bicicleta"
        />
      )}

      {loading && <h1>Carregando...</h1>}

      {bike !== null && (
        <BikePageViewContainer>
          <BikePageInfo>
            <div className="prop-info">
              <BikeTitle>{bike?.name}</BikeTitle>
              <BikeEngineName>{bike?.engine}</BikeEngineName>
              <BikePrice>${bike?.price}/hora</BikePrice>
              <ButtonRentNow onClick={goToRent}>Arrendar agora</ButtonRentNow>
            </div>
            <div className="image-info">
              <BikeCover src={bike?.cover} alt="bicicleta" />
            </div>
          </BikePageInfo>
          <BikeImagesCoursel>
            {bike?.images.map((image) => (
              <BikeImagesCourselItem
                active={false}
                src={image}
                alt={image}
                key={image}
              />
            ))}
          </BikeImagesCoursel>
          <BikeDescription>{bike?.description}</BikeDescription>

          <FeaturesListTitle>Funcionalidades</FeaturesListTitle>
          <FeaturesList>
            {bike?.features.map((feature) => (
              <FeaturesListItem key={feature.title}>
                <GiDutchBike fontSize={50} color="#E6E6E6" />
                <h1>{feature.title}</h1>
                <p>{feature.description}</p>
              </FeaturesListItem>
            ))}
          </FeaturesList>
          <ButtonRentNow onClick={goToRent}>Arrendar agora</ButtonRentNow>
        </BikePageViewContainer>
      )}
    </PageLayout>
  );
};

export default BikePageView;

import { useEffect, useState } from "react";
import { useGetBikes } from "../../../hooks/useGetBikes";
import { getBikes } from "../../../services/bikes";
import { Bike } from "../../../typescript/bikes";
import BikeCard from "../BikeCard";
import { NewBikesContainer, NewBikesTitle, NewBikesList } from "./styles";

const NewBikes = () => {
  const { bikes, loading } = useGetBikes({ limit: 4 });

  return (
    <NewBikesContainer>
      <NewBikesTitle>NOVAS BICICLETAS</NewBikesTitle>

      {loading && <h1>CARREGANDO BICICLETAS...</h1>}

      {!loading && bikes.length === 0 && <h1>SEM BICICLETAS NOVAS</h1>}

      {!!bikes.length && (
        <NewBikesList>
          {bikes.map((item) => (
            <BikeCard bike={item} key={item.id} />
          ))}
        </NewBikesList>
      )}
    </NewBikesContainer>
  );
};

export default NewBikes;

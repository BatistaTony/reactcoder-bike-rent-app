import { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import PageLayout from "../../components/Layout";
import BikeCard from "../../components/molecules/BikeCard";
import BikeFilter, { IFilter } from "../../components/molecules/BikesFilter";
import Pagination from "../../components/molecules/Pagination";
import { useGetBikes } from "../../hooks/useGetBikes";
import { Bike } from "../../typescript/bikes";
import {
  BikesList,
  BikesViewContainer,
  BikesViewSubTitle,
  BikesViewTitle,
  FilterContainer,
  PaginationContainer,
} from "./styles";

const BikesPageView = () => {
  const [filter, setFilter] = useState<IFilter>({
    search: "",
    price: 0,
    engine: "",
  });

  const [page, setPage] = useState(1);
  const limit = 6;
  const { bikes, loading } = useGetBikes({ limit, page });

  const handleChange = (
    event: React.ChangeEvent | SelectChangeEvent<string>
  ) => {
    const target = event.target as HTMLInputElement;

    setFilter({
      ...filter,
      [target.name]: target.value,
    });
  };

  const handleSearch = () => {
    console.log(filter);
  };

  return (
    <PageLayout title="Bicicletas">
      <BikesViewContainer>
        <BikesViewTitle>Escolha a bicicleta perfeita para você</BikesViewTitle>
        <BikesViewSubTitle>
          The ideal bike plus concierge level support. Pay per hours.
        </BikesViewSubTitle>
        <FilterContainer>
          <BikeFilter
            filter={filter}
            handleChange={handleChange}
            handleSearch={handleSearch}
          />
        </FilterContainer>
        <BikesList>
          {bikes.map((item) => (
            <BikeCard key={item.id} bike={item} />
          ))}
        </BikesList>
        <PaginationContainer>
          <Pagination
            handleActivePage={(page: number) => setPage(page)}
            handleNextPage={() => null}
            handlePrevPage={() => null}
            page={page}
            pages={[1, 2, 3]}
          />
        </PaginationContainer>
      </BikesViewContainer>
    </PageLayout>
  );
};

export default BikesPageView;

import { SelectChangeEvent } from "@mui/material";
import { useEffect, useState } from "react";
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
  const limit = 5;
  const { search, engine, price } = filter;
  const { bikes, loading, totalItems, totalPages } = useGetBikes({
    limit,
    page,
    search,
    engine,
    price,
    isFilter: true,
  });

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

  const generatePageNumber = (): number[] => {
    const pageQty = Math.ceil(totalItems / limit);
    const result = [Array.from(Array(pageQty).keys())];
    return result[0];
  };

  const goNextPage = () => {
    const nextPage = page + 1;
    if (nextPage <= totalPages) {
      setPage(nextPage);
    }
  };

  const goPrevPage = () => {
    const prevPage = page - 1;
    if (prevPage >= 1) {
      setPage(prevPage);
    }
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
        {loading && <h1>Procurando bicicletas...</h1>}
        {bikes.length === 0 && !loading && <h1>Sem bicicletas</h1>}
        {bikes.length > 0 && (
          <BikesList>
            {bikes.map((item) => (
              <BikeCard key={item.id} bike={item} />
            ))}
          </BikesList>
        )}
        {totalPages > 1 && (
          <PaginationContainer>
            <Pagination
              handleActivePage={(page: number) => setPage(page)}
              handleNextPage={goNextPage}
              handlePrevPage={goPrevPage}
              page={page}
              pages={generatePageNumber()}
            />
          </PaginationContainer>
        )}
      </BikesViewContainer>
    </PageLayout>
  );
};

export default BikesPageView;

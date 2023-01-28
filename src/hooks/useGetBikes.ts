import { useState, useEffect } from "react";
import { getBikes } from "../services/bikes";
import { Bike } from "../typescript/bikes";

interface useGetBikesProps {
  limit: number;
  page?: number;
  search?: string;
  price?: number;
  engine?: string;
  isFilter?: boolean;
}

interface GetBikes {
  bikes: Bike[];
  loading: boolean;
  totalItems: number;
  totalPages: number;
}

export const useGetBikes = ({
  limit,
  engine,
  page,
  price,
  search,
  isFilter,
}: useGetBikesProps): GetBikes => {
  const [bikes, setBikes] = useState<Bike[]>([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  const handleGetBikes = async () => {
    setLoading(true);

    let result: Bike[] = [];
    let totalItems = 0;

    if (isFilter) {
      const response = await getBikes({ limit, search, engine, page, price });
      result = response.bikes;
      totalItems = response.totalItems;
    } else {
      const response = await getBikes({ limit });
      result = response.bikes;
      totalItems = response.totalItems;
    }

    setTotalItems(totalItems);
    setTotalPages(Math.ceil(totalItems / limit));
    setBikes(result);
    setLoading(false);
  };

  useEffect(() => {
    handleGetBikes();
  }, [search, engine, price, page]);

  return { bikes, loading, totalItems, totalPages };
};

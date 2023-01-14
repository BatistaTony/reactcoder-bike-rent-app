import { useState, useEffect } from "react";
import { getBikes } from "../services/bikes";
import { Bike } from "../typescript/bikes";

interface useGetBikesProps {
  limit: number;
  page?: number;
}

interface GetBikes {
  bikes: Bike[];
  loading: boolean;
}

export const useGetBikes = ({ limit }: useGetBikesProps): GetBikes => {
  const [bikes, setBikes] = useState<Bike[]>([]);

  const [loading, setLoading] = useState(false);

  const handleGetBikes = async () => {
    setLoading(true);
    const result = await getBikes({ limit });

    setBikes(result);
    setLoading(false);
  };

  useEffect(() => {
    handleGetBikes();
  }, []);

  return { bikes, loading };
};

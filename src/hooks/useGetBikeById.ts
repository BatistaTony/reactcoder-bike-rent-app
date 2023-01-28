import { Bike } from "../typescript/bikes";
import { useState, useEffect } from "react";
import { getBikeById } from "../services/bikes";

interface UseGetBikeByIdProps {
  id: number;
}

export const useGetBikeById = ({ id }: UseGetBikeByIdProps) => {
  const [bike, setBike] = useState<Bike | null>(null);
  const [loading, setLoading] = useState(false);

  const handleBike = async () => {
    if (id) {
      setLoading(true);
      const response = await getBikeById(Number(id));
      setBike(response);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleBike();
  }, []);

  return { bike, loading };
};

import { Bike } from "../typescript/bikes";
import { api } from "./api";

interface getBikesProps {
  limit: number;
}

export const getBikes = async ({ limit }: getBikesProps): Promise<Bike[]> => {
  const response = await api.get(`/bikes?_limit=${limit}`);
  return response.data;
};

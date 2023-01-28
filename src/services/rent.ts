import { Rent } from "../typescript/rent";
import { api } from "./api";

export const rentBike = async (data: Rent) => {
  const response = await api.post("/rents", {
    ...data,
  });

  console.log(response);
};

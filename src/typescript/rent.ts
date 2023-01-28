import { Bike } from "./bikes";
import { User } from "./user";

export interface Rent {
  user: User;
  bike: Bike;
  hours: number;
  totalPrice: number;
  status: string;
  address: string;
}

export interface CardInfo {
  cardNumber: string;
  cvc: string;
  name: string;
  date: string;
}

import { USER_DATA_KEY } from "../constants/local-storage-key";
import { User } from "../typescript/user";

export const saveAuthToLocalStorage = (accessToken: string, user: User) => {
  const data = {
    accessToken,
    user,
  };

  localStorage.setItem(USER_DATA_KEY, JSON.stringify(data));
};

export const getAuthFromLocalStorage = () => {
  const data = localStorage.getItem(USER_DATA_KEY);

  if (data) {
    return JSON.parse(data);
  } else {
    return null;
  }
};

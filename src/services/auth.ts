import { saveAuthToLocalStorage } from "../helpers/local-storage";
import { User, UserLoginType } from "../typescript/user";
import { api } from "./api";

export const login = async (data: UserLoginType) => {
  try {
    const response = await api.post("/login", {
      ...data,
    });

    saveAuthToLocalStorage(response.data.accessToken, response.data.user);
    return { status: 201, data: response };
  } catch (error: any) {
    return { status: 400, msg: error.response.data };
  }
};

export const register = async (data: User) => {
  try {
    const response = await api.post("/users/register", {
      ...data,
    });

    console.log(response);
    saveAuthToLocalStorage(response.data.accessToken, response.data.user);
    return { status: 201, data: response };
  } catch (error: any) {
    return { status: 400, msg: error.response.data };
  }
};

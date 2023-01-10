import { User, UserLoginType } from "../typescript/user";

export const validateRegisterForm = (data: User) => {
  const values = Object.entries(data);

  for (const prop of values) {
    if (prop[1] === "") {
      return prop[0];
    }
  }
};

export const validateLoginForm = (data: UserLoginType) => {
  const values = Object.entries(data);

  for (const prop of values) {
    if (prop[1] === "") {
      return prop[0];
    }
  }
};

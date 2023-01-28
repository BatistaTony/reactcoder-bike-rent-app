import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getAuthFromLocalStorage } from "../helpers/local-storage";
import { User } from "../typescript/user";

export const useGetUserInfo = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const data = getAuthFromLocalStorage();

    if (data) {
      setUser(data.user);
      setIsLogged(true);
    }
  }, []);

  return { user, isLogged };
};

import { useRouter } from "next/router";
import { useGetUserInfo } from "../../../hooks/useGetUserInfo";
import {
  NavbarContainer,
  NavbarLogo,
  MenuContainer,
  MenuList,
  MenuListItem,
  MenuButton,
} from "./styles";

interface NavbarProps {
  title: string;
}

const LOGGED_ROUTES = [
  { title: "Bicicletas", route: "bikes" },
  { title: "Bicicletas arrendadas", route: "bikes-rented" },
  { title: "Conta", route: "account" },
];

const Navbar = ({ title }: NavbarProps) => {
  const { isLogged } = useGetUserInfo();
  const router = useRouter();

  const isTransparent =
    title === "Entrar" || title === "Registrar" || title === "Home";

  return (
    <NavbarContainer isTransparent={isTransparent}>
      <NavbarLogo>Bike Rentz</NavbarLogo>

      {!isLogged && (
        <MenuContainer>
          <MenuList>
            <MenuListItem onClick={() => router.push(`/bikes`)}>
              Bicicletas
            </MenuListItem>
            <MenuButton onClick={() => router.push(`/login`)}>
              Entrar
            </MenuButton>
          </MenuList>
        </MenuContainer>
      )}

      {isLogged && (
        <MenuContainer>
          <MenuList>
            {LOGGED_ROUTES.map((item) => (
              <MenuListItem
                key={item.route}
                onClick={() => router.push(`/${item.route}`)}
              >
                {item.title}
              </MenuListItem>
            ))}
          </MenuList>
        </MenuContainer>
      )}
    </NavbarContainer>
  );
};

export default Navbar;

import { NavbarContainer, NavbarLogo } from "./styles";

interface NavbarProps {
  title: string;
}

const Navbar = ({ title }: NavbarProps) => {
  return (
    <NavbarContainer
      isTransparent={title === "Entrar" || title === "Registrar"}
    >
      <NavbarLogo>Bike Rentz</NavbarLogo>
    </NavbarContainer>
  );
};

export default Navbar;

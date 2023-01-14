import styled from "@emotion/styled";
import { ButtonEnter } from "./../../../views/LoginView/styles";

interface NavbarContainerProps {
  isTransparent: boolean;
}

export const NavbarContainer = styled.div<NavbarContainerProps>`
  width: 100%;
  height: 100px;
  background: ${({ isTransparent }) =>
    isTransparent ? "transparent" : "#315a74"};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const NavbarLogo = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 43px;
  cursor: pointer;
  /* identical to box height */

  color: #e6474b;
`;

export const MenuContainer = styled.div`
  width: auto;
`;

export const MenuList = styled.ul`
  width: auto;
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const MenuListItem = styled.li`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  color: #ffffff;
  cursor: pointer;
  margin-left: 15px;
  margin-left: 15px;
`;

export const MenuButton = styled(ButtonEnter)`
  width: 120px;
  height: 56px;
  font-size: 19px;
  border-radius: 13px;
  margin: 0;
  margin-left: 20px;
  cursor: pointer;
`;

import styled from "@emotion/styled";

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
  align-items: center;
  padding-left: 100px;
  padding-right: 100px;
`;

export const NavbarLogo = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 35px;
  line-height: 43px;
  /* identical to box height */

  color: #e6474b;
`;

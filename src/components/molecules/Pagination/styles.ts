import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PaginationList = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

interface ListItemProps {
  active: boolean;
}

export const PaginationListItem = styled.div<ListItemProps>`
  background: ${({ active }) => (active ? "#E6474B" : "#ffffff")};
  border: 2px solid ${({ active }) => (active ? "transparent" : "#969595")};
  border-radius: 5px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  width: 39px;
  height: 38px;
  color: ${({ active }) => (active ? "#ffffff" : "#000000")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  margin-left: 10px;
  cursor: pointer;
`;

export const PaginationButton = styled.button`
  width: 59px;
  height: 38px;
  background: #ffffff;
  border: 2px solid #969595;
  border-radius: 5px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

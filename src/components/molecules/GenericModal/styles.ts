import styled from "@emotion/styled";

export const ModalOverlay = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 2;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  width: 500px;
  min-height: 350px;
  height: auto;
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`;

export const ModalTitle = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 27px;
  line-height: 33px;
  color: #000000;
  width: 90%;
  text-align: center;
  margin-bottom: 20px;
`;

export const ModalIcon = styled.div`
  width: 51px;
  height: 51px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ModalDescription = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;
  text-align: center;
  color: #000000;
  width: 90%;
`;

export const ModalGroupButton = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 10px;
`;

interface ModalButtonProps {
  isOutlined?: boolean;
}

export const ModalButton = styled.button<ModalButtonProps>`
  width: 220px;
  height: 45px;
  background: ${({ isOutlined }) => (isOutlined ? "transparent" : "#e6474b")};
  border: ${({ isOutlined }) => (isOutlined ? "1px solid #000000;" : "none")};
  border-radius: 5px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ isOutlined }) => (isOutlined ? "#000" : "#fff")};
  cursor: pointer;
`;

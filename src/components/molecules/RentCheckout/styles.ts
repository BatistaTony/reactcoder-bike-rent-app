import styled from "@emotion/styled";
import { ModalButton } from "./../GenericModal/styles";

export const RentCheckoutContaienr = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 4px 2px rgba(0, 0, 0, 0.25);
  border-radius: 3px;
  padding: 36px;
  padding-top: 76px;
  width: 500px;

  .btn-group {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

export const RentCheckoutTitle = styled.div`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 42px;
  line-height: 51px;
  color: #000000;
`;

export const RentCheckoutUserInfoFormContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;

  .ipt-checkout {
    width: 100%;
    margin-bottom: 15px;
  }

  .grid-row {
    width: 100%;
    display: grid;
    grid-template-columns: 40% 60%;

    .title {
      width: 100%;
      font-family: "Helvetica Neue";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #000000;
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 50px;

      img {
        width: 34px;
        height: 24px;
        margin-right: 5px;
      }
    }

    .data {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      font-family: "Helvetica Neue";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 31px;
      color: #e6474b;
    }
  }
`;

export const BikeHourFieldContainer = styled.div`
  width: 149px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #ddd1d1;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 40px auto 40px;
  align-items: center;
`;

export const BikeHourFieldButton = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const BikeHourFieldText = styled.div`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const RentCheckoutNotes = styled.div`
  background: #cccccc;
  border-radius: 6px;
  padding: 20px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  display: flex;
  align-items: center;
  color: #000000;
`;

export const RentCheckoutCardInfoTitle = styled.div`
  margin-top: 50px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 31px;
  color: #000000;
`;

export const RentCheckoutCardInfoContainer = styled.div`
  height: auto;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 60% 35%;
  grid-template-rows: 50px 50px;
  grid-gap: 15px;

  div {
    width: 100%;
    height: 100%;
  }
`;

export const RentCheckoutButton = styled(ModalButton)`
  width: 200px;
`;

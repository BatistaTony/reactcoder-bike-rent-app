import styled from "@emotion/styled";

export const ViewContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
`;

export const FormContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  .ipt-form {
    margin-top: 20px;
    height: 50px;
    width: 290px;
  }

  .question-container {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  }

  .resgister-form-ipts {
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 20px;
  }
`;

export const FormTitle = styled.h1`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 700;
  font-size: 45px;
  line-height: 55px;
  color: #e6474b;
`;

export const FormSubTitle = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 34px;
  color: #000000;
  /* margin-bottom: 30px; */
`;

export const ButtonEnter = styled.button`
  background: #e6474b;
  border-radius: 6px;
  width: 215px;
  height: 40px;
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  outline: none;
  border: none;
  margin-top: 30px;
  cursor: pointer;
`;

export const FormQuestion = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
`;

export const FormQuestionAction = styled(FormQuestion)`
  text-decoration-line: underline;
  color: #e6474b;
  cursor: pointer;
  margin-left: 5px;
`;

export const FormErrorMsg = styled.p`
  font-family: "Helvetica Neue";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  color: #e6474b;
  margin-top: 10px;
`;

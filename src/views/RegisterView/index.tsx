import PageLayout from "../../components/Layout";
import {
  FormContainer,
  ViewContainer,
  FormSubTitle,
  FormTitle,
  ButtonEnter,
  FormQuestion,
  FormQuestionAction,
  FormErrorMsg,
} from "../LoginView/styles";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { User, UserLoginType } from "../../typescript/user";
import { login, register } from "../../services/auth";
import { useRouter } from "next/router";
import { validateRegisterForm } from "../../helpers/validation";

const errorMsgDefault = { field: "", msg: "" };

const PageViewRegistrar = () => {
  const [registerData, setRegisterData] = useState<User>({
    firstname: "",
    lastname: "",
    address: "",
    phone: "",
    email: "",
    password: "",
  });
  const [msgError, setMsgError] = useState(errorMsgDefault);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setRegisterData({
      ...registerData,
      [target.name]: target.value,
    });

    setMsgError(errorMsgDefault);
  };

  const handleLogin = async () => {
    const result = validateRegisterForm(registerData);

    if (result) {
      setMsgError({
        field: result,
        msg: `${result}  está vazio, todos os campos são obrigatorio`,
      });
    } else {
      setLoading(true);
      const result = await register(registerData);

      if (result.status === 201) {
        router.push("/");
      } else {
        setMsgError(result.msg);
      }
      setLoading(false);
    }
  };

  return (
    <PageLayout title="Registrar">
      <ViewContainer>
        <FormContainer>
          <FormTitle>Entrar</FormTitle>
          <FormSubTitle>Entre e arrenda uma bicicleta hoje</FormSubTitle>
          <div className="resgister-form-ipts">
            <TextField
              onChange={handleChange}
              name="firstname"
              className="ipt-form"
              placeholder="Primeiro"
              error={msgError.field === "firstname"}
            />
            <TextField
              onChange={handleChange}
              name="lastname"
              className="ipt-form"
              placeholder="Ultimo nome"
              error={msgError.field === "lastname"}
            />
            <TextField
              onChange={handleChange}
              name="address"
              className="ipt-form"
              placeholder="Endereço de entrega"
              error={msgError.field === "address"}
            />
            <TextField
              onChange={handleChange}
              name="phone"
              className="ipt-form"
              placeholder="Telefone"
              error={msgError.field === "phone"}
            />
            <TextField
              onChange={handleChange}
              name="email"
              className="ipt-form"
              placeholder="Email"
              error={msgError.field === "email"}
            />
            <TextField
              name="password"
              className="ipt-form"
              placeholder="Password"
              type="password"
              onChange={handleChange}
              error={msgError.field === "password"}
            />
          </div>

          {!!msgError && <FormErrorMsg>{msgError.msg}</FormErrorMsg>}
          <ButtonEnter disabled={loading} onClick={handleLogin}>
            {loading ? "carregando..." : "Registrar"}
          </ButtonEnter>
          <div className="question-container">
            <FormQuestion>Já possui uma conta ?</FormQuestion>
            <FormQuestionAction onClick={() => router.push("login")}>
              Login
            </FormQuestionAction>
          </div>
        </FormContainer>
      </ViewContainer>
    </PageLayout>
  );
};

export default PageViewRegistrar;

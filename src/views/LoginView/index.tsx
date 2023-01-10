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
} from "./styles";
import { TextField } from "@mui/material";
import React, { useState } from "react";
import { UserLoginType } from "../../typescript/user";
import { login } from "../../services/auth";
import { useRouter } from "next/router";
import { validateLoginForm } from "../../helpers/validation";

const errorMsgDefault = { field: "", msg: "" };

const LoginView = () => {
  const [loginData, setLoginData] = useState<UserLoginType>({
    email: "",
    password: "",
  });
  const [msgError, setMsgError] = useState(errorMsgDefault);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setLoginData({
      ...loginData,
      [target.name]: target.value,
    });

    setMsgError(errorMsgDefault);
  };

  const handleLogin = async () => {
    const result = validateLoginForm(loginData);

    if (result) {
      setMsgError({
        field: result,
        msg: `${result}  está vazio, todos os campos são obrigatorio`,
      });
    } else {
      setLoading(true);
      const result = await login(loginData);

      if (result.status === 201) {
        router.push("/");
      } else {
        setMsgError({ field: "", msg: result.msg });
      }
      setLoading(false);
    }
  };

  return (
    <PageLayout title="Entrar">
      <ViewContainer>
        <FormContainer>
          <FormTitle>Entrar</FormTitle>
          <FormSubTitle>Entre e arrenda uma bicicleta hoje</FormSubTitle>
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
          {!!msgError && <FormErrorMsg>{msgError.msg}</FormErrorMsg>}
          <ButtonEnter disabled={loading} onClick={handleLogin}>
            {loading ? "carregando..." : "Entrar"}
          </ButtonEnter>
          <div className="question-container">
            <FormQuestion>Não possui uma conta ?</FormQuestion>
            <FormQuestionAction onClick={() => router.push("registrar")}>
              Registrar
            </FormQuestionAction>
          </div>
        </FormContainer>
      </ViewContainer>
    </PageLayout>
  );
};

export default LoginView;

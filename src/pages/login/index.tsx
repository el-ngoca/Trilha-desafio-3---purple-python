import React from "react";
import { Header } from "../../components/header";
import {
  Column,
  Container,
  CriarText,
  RecuperarText,
  Row,
  SubTitle,
  TitlePrincipal,
} from "./styles";
import Button from "../../components/button";
import { Input } from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  function handleNav() {
    navigate("/signup");
  }
  function handleSign() {
    navigate("/feed");
  }

  const schema = yup
    .object({
      email: yup.string().email("Email inválido").required("Campo obrigatório"),
      password: yup.string().min(6, "No minimo 8 caracteres").required("campo obrigatório"),
    })
    .required();

  const {
    register,
    control,
    formState: { errors, isValid },
  } = useForm( {
    resolver: yupResolver(schema),
    mode: "onBlur",
    reValidateMode: "onChange",

  });

  console.log(isValid);
  return (
    <>
      <Header autenticado={false} />
      <Container>
        <Column>
          <img src="./logo.png" alt="" />
        </Column>
        <Column>
          <TitlePrincipal>Faça seu cadastro</TitlePrincipal>
          <SubTitle>Faça o seu Login e make a change...</SubTitle>
          <form>
            <Input
              placeholder="Digite seu Email"
              leftIcon={""}
              name="email"
              control={control} errorMessage={errors.email?.message}
            />
            <Input
              placeholder="Digite sua Palavra Passe"
              type="password"
              leftIcon={""}
              name="password"
              control={control}
              errorMessage={errors.password?.message}
            />
            <Button
              title="Login"
              variant="secondary"
              onClick={() => handleSign()}
              disabled={!isValid}
            />
          </form>
          <Row>
            <CriarText onClick={() => handleNav()}>Criar conta</CriarText>
            <RecuperarText>Recuperar palavra passe</RecuperarText>
          </Row>
        </Column>
      </Container>
    </>
  );
};

export { Login };

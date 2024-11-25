import React from "react";
import { Header } from "../../components/header";
import {
  Column,
  Container,
  Row,
  SubTitle,
  TitlePrincipal,
} from "./styles";
import Button from "../../components/button";
import { Input } from "../../components/Input/Input";
import { LoginText } from "./styles";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  function handleNav () {
    navigate("/login")
  }
  return (
    <>
      <Header autenticado={false} />
      <Container>
        <Column>
          <img src="./logo.png" alt="" />
        </Column>
        <Column>
          <TitlePrincipal>Faça seu cadastro</TitlePrincipal>
          <SubTitle>Adicione os detalhes e seja bem Vindo!</SubTitle>
          <form>
            <Input placeholder="Seu Nome e apelido" leftIcon={""} name={""} />
            <Input placeholder="Digite seu Email" leftIcon={""} name={""} />
            <Input
              placeholder="Digite sua Palavra Passe"
              type="password"
              leftIcon={""} name={""}            />
            <Button title="SignUp" variant="secondary" type="submit" />
          </form>
          <Row>
            <LoginText onClick={()=> handleNav()}>Fazer o Login</LoginText>
          </Row>
        </Column>
      </Container>
    </>
  );
};

export { Signup };

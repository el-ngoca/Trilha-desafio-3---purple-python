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
      <Header />
      <Container>
        <Column>
          <img src="./logo.png" />
        </Column>
        <Column>
          <TitlePrincipal>Faça seu cadastro</TitlePrincipal>
          <SubTitle>Adicione os detalhes e seja bem Vindo!</SubTitle>
          <form>
            <Input placeholder="Seu Nome e apelido" leftIcon={""} />
            <Input placeholder="Digite seu Email" leftIcon={""} />
            <Input
              placeholder="Digite sua Palavra Passe"
              type="password"
              leftIcon={""}
            />
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

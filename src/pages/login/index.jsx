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


const Login = () => {
  const navigate = useNavigate();

  function handleNav() {
    navigate("/signup")
  }
  function handleSign() {
    navigate("/feed")
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
          <SubTitle>Faça o seu Login e make a change...</SubTitle>
          <form>
            <Input placeholder="Digite seu Email" leftIcon={""} />
            <Input placeholder="Digite sua Palavra Passe" type="password" leftIcon={""}/>
            <Button title="Login" variant="secondary" onClick={() => handleSign()}/>
          </form>
          <Row>
            <CriarText onClick={()=> handleNav()}>Criar conta</CriarText>
            <RecuperarText>Recuperar palavra passe</RecuperarText>
          </Row>
        </Column>
      </Container>
    </>
  );
};

export { Login };

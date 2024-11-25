import React from "react";
import {
  BrandTitle,
  Container,
  Input,
  InputConatiner,
  LogoImg,
  Menu,
  MenuRight,
  Row,
  UserImg,
  Wrapper,
} from "./styles";
import Button from "../button";
import { IHeader } from "./types";

const Header = ({ autenticado } : IHeader) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <LogoImg src="./logo.png" alt="logo" />
          <BrandTitle>Purple Phython</BrandTitle>
          {autenticado ? (
            <>
              <InputConatiner>
                <Input placeholder="buscar..." />
              </InputConatiner>
              <Menu>live code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserImg src="./logo.png" />
          ) : (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" variant="primary" />
              <Button title="Cadastrar-se" variant="primary" />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };

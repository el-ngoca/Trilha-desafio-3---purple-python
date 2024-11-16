import React from "react";
import {
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

const Header = ({ autenticado }) => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <LogoImg src="./logo.png" alt="logo" />
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

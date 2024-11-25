import React from "react";
import { Header } from "./../../components/header";
import { Column, Container, Text, TitleHighLight, TitlePrincipal } from "./styles";
import Button from "./../../components/button";
import {  useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function handleNav(){navigate("/login")};
  return (
    <>
      <Header autenticado={false} />
      <Container>
        <Column>
          <TitlePrincipal>
            <TitleHighLight>
              Implemente
              <br />
            </TitleHighLight>
            o seu futuro agora!
          </TitlePrincipal>
          <Text>
            Conecte-se ao conhecimento que transforma carreiras. Nossa
            plataforma oferece cursos práticos, projetos reais e suporte
            contínuo para formar os profissionais de TI que o mercado precisa.
            Aprenda, pratique e evolua com os melhores.
          </Text>
          <Button title="começar" variant="secondary" onClick={() => handleNav()} type="button"/>
        </Column>
        <Column style={{display: "flex",justifyContent: "center"}}>
            <img style={{transform: "ScaleX(-1)", width: '80%'}} src="./pro.webp" alt="coding the future"/>
        </Column>
      </Container>
    </>
  );
};

export { Home };

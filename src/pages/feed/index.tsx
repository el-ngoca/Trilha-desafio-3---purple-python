import React from "react";
import { Header } from "../../components/header";
import { Card } from "../../components/card";
import { Column, Container, TitlePrincipal } from "./styles";
import { UserInfomation } from "../../components/UserInfo";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <TitlePrincipal>Feed</TitlePrincipal>
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitlePrincipal>Top Ranking</TitlePrincipal>
          <UserInfomation
            name="eduardo Ngoca"
            image="./logo.png"
            percentual={80}
          />
          <UserInfomation
            name="eduardo Ngoca"
            image="./logo.png"
            percentual={20}
          />
          <UserInfomation
            name="eduardo Ngoca"
            image="./logo.png"
            percentual={80}
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };

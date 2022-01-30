import { useState, useEffect } from "react";
import { getUserData } from "../../../services";
import { Container } from "./styles";
import { Image, Wrapper, Text } from "../../atoms";

export const UserInfo = ({ userData, reverse, ...props }) => {
  return (
    <Container
      direction={reverse ? "row-reverse" : "row"}
      {...props}
    >
      <Image src={userData.avatar} alt="foto do usuário logado" width="3rem" />

      <Wrapper alignItems={reverse ? "flex-end" : "flex-start"}>
        <Text fontSize={11}>{userData.name}</Text>
        <Text fontSize={9}>@{userData.login}</Text>
      </Wrapper>
    </Container>
  );
};

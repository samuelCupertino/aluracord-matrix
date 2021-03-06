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
      {userData.avatar && <Image src={userData.avatar} alt="foto do usuário logado" width="3rem" borderRadius={['50%']} />}

      <Wrapper alignItems={reverse ? "flex-end" : "flex-start"}>
        <Text fontSize={11} maxLine={1}>{userData.name || ''}</Text>
        {userData.login && <Text fontSize={9} maxLine={1}>@{userData.login}</Text>}
      </Wrapper>
    </Container>
  );
};

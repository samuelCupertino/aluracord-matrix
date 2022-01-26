import { useState, useEffect } from "react";
import { getUserData } from "../../../services";
import { Container } from "./styles";
import { Image, Wrapper, Text } from "../../atoms";

export const UserInfo = ({ userLogin, reverse, active, ...props }) => {
  const userDefault = {
    name: "Usuário teste",
    login: "usuarioTest",
    avatar:
      "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
  };
  const [userData, setUserData] = useState(userDefault);

  useEffect(async () => {
    const user = await getUserData(userLogin);

    setUserData(user || userDefault);
  }, []);

  return (
    <Container
      className={active ? "active" : ""}
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

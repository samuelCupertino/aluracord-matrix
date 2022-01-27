import { useState, useEffect } from "react";
import { getUserData } from "../../../services";
import { Container } from "./styles";
import { Image, Wrapper, Text } from "../../atoms";

export const UserInfo = ({ userData, userLogin, reverse, active, ...props }) => {
  const userDefault = {
    name: "Nome do usuário",
    login: "loginUsuario",
    avatar: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
  };
  const [user, setUser] = useState(userDefault);

  useEffect(async () => {
    if(userData) {
      setUser(userData);
      return
    }

    const newUser = await getUserData(userLogin);
    setUser(newUser || userDefault);
  }, []);

  return (
    <Container
      className={active ? "active" : ""}
      direction={reverse ? "row-reverse" : "row"}
      {...props}
    >
      <Image src={user.avatar} alt="foto do usuário logado" width="3rem" />

      <Wrapper alignItems={reverse ? "flex-end" : "flex-start"}>
        <Text fontSize={11}>{user.name}</Text>
        <Text fontSize={9}>@{user.login}</Text>
      </Wrapper>
    </Container>
  );
};

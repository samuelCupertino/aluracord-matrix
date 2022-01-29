import { Text } from "../../atoms";
import { UserInfo } from "../../molecules";
import { Container } from "./styles";

export const HeaderChat = () => {
  return (
    <Container>
      <Text fontSize={14} align="center">AluraVerso - Chat</Text>
      <UserInfo userLogin="Rayanne-zeff" />
      <UserInfo userLogin="samuelCupertino" reverse />
    </Container>
  );
};

import { HeaderChat, AsideChat, MainChat } from "../../organisms";
import { Container } from "./styles";

export const Chat = () => {
  return (
    <Container>
      <HeaderChat />
      <AsideChat />
      <MainChat />
    </Container>
  );
};

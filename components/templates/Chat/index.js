import { useState } from "react";
import { AsideChat, MainChat } from "../../organisms";
import { Container } from "./styles";

export const Chat = () => {
  const [chatContact, setChatContact] = useState({})
  
  return (
    <Container>
      <AsideChat setChatContact={setChatContact} />
      <MainChat chatContact={chatContact} />
    </Container>
  );
};

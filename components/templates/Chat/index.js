import { useState } from "react";
import { AsideChat, MainChat, MainChatGroup } from "../../organisms";
import { Container } from "./styles";

export const Chat = () => {
  const [chatContact, setChatContact] = useState({})
  const [isContactGroup, setIsContactGroup] = useState(true)

  const handleClickContact = (contact) => {
    const isGroup = contact.login === ""
    setIsContactGroup(isGroup)
    setChatContact(contact)
  }
  
  return (
    <Container>
      <AsideChat setChatContact={handleClickContact} />
      {isContactGroup 
        ? <MainChatGroup chatContact={chatContact} /> 
        : <MainChat chatContact={chatContact} /> 
      }
    </Container>
  );
};

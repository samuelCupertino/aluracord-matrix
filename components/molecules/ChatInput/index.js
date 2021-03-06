import { useState, useCallback } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { BsSticky } from "react-icons/bs";
import { chatMessages, userLogged } from "../../../services";

import { Container } from "./styles";
import { Input, Wrapper } from "../../atoms";

export const ChatInput = ({ chatContact, messages, setMessages, setStickersVisibility }) => {
  const [messageText, setMessageText] = useState("");
  const { setChatMessages } = chatMessages();
  const { getUserLogged } = userLogged();

  const handleSend = useCallback((e) => {
    if(e.key === 'Enter' || e.type === 'click') {
      if(!messageText.trim()) return

      const user = getUserLogged();
      
      const newMessage = { 
        texto: messageText, 
        de: user.login, 
        created_at: new Date().toISOString(),
      }

      setMessages([...messages, newMessage])
      setMessageText('')
      setChatMessages(chatContact.login, newMessage)
    }
  }, [messageText])

  return (
    <Container>
      <Input 
        placeholder="Digite sua mensagem"
        value={messageText}
        onChange={e => setMessageText(e.target.value)}
        onKeyDown={handleSend}
        width="100%"
      />
      <Wrapper 
        cursor="pointer"
        alignItems="center"
        padding={[10, 15]}
        justifyContent="center"
        onClick={() => setStickersVisibility(v => !v)}
      >
       <BsSticky fontSize={22} color="white"/>
      </Wrapper>
      <Wrapper 
        onClick={handleSend}
        cursor="pointer"
        padding={[10, 15]}
        alignItems="center"
        borderRadius={[15,0,0]}
        bgColor="primary"
        bgColorWeight={600}
        bgOpacity={0.75}
      >
        <RiSendPlaneFill fontSize={32} color="white"/>
      </Wrapper>
    </Container>
  )
};

import { useState, useCallback } from "react";
import { chatMessages, userLogged } from "../../../services";

import { Container } from "./styles";
import { Input, Button } from "../../atoms";

export const ChatInput = ({ chatContact, messages, setMessages }) => {
  const [messageText, setMessageText] = useState("");
  const { setChatMessages } = chatMessages();

  const handleSend = useCallback((e) => {
    if(e.key === 'Enter' || e.type === 'click') {
      if(!messageText.trim()) return

      const newMessage = { text: messageText, author: 'me' }

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
      />
      <Button onClick={handleSend}>Enviar</Button>
    </Container>
  )
};

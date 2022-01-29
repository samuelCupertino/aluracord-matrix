import { useState, useCallback } from "react";

import { Container } from "./styles";
import { Input, Button } from "../../atoms";

export const ChatInput = ({ setMessages }) => {
  const [messageText, setMessageText] = useState("");

  const handleSend = useCallback((e) => {
    if(e.key === 'Enter' || e.type === 'click') {
      setMessages(messages => [...messages, { text: messageText, author: 'me' }])
      setMessageText('')
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

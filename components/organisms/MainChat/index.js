import { useState } from "react";

import { Container } from "./styles";
import { Scroll } from '../../atoms'
import { ChatMessage, ChatInput } from '../../molecules'

export const MainChat = () => {
  const historicMessages = [
    {
      text: "Olá, tudo bem?",
      author: "user",
    },
    {
      text: "Tudo bem, e você?",
      author: "me",
    }
  ]
  const [messages, setMessages] = useState(historicMessages)

  return (
    <Container>
      <Scroll padding={[10, 5, 20, 5]} >
        {messages.map((message, index) => (
          <ChatMessage 
            key={index} 
            isAuthor={message.author === 'me'}
          >{message.text}</ChatMessage>
        ))}
      </Scroll>
      <ChatInput messages={messages} setMessages={setMessages} />
    </Container>
  );
};

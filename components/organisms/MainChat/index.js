import { useCallback, useEffect, useState } from "react";
import { chatMessages } from "../../../services";

import { Container } from "./styles";
import { Scroll } from '../../atoms'
import { ChatHeader, ChatMessage, ChatInput } from '../../molecules'

export const MainChat = ({ chatContact }) => {
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
  const { getChatMessages } = chatMessages();

  const handleGetChatMessages = useCallback(() => {
    const contactMessages = getChatMessages(chatContact.login);
    setMessages(contactMessages)
  }, [chatContact])

  useEffect(handleGetChatMessages, [chatContact])

  return (
    <Container>
      <ChatHeader chatContact={chatContact}/>
      <Scroll padding={[10, 5, 20, 5]} autoScroll="bottom">
        {messages.map((message, index) => (
          <ChatMessage 
            key={index} 
            isAuthor={message.author === 'me'}
          >
            {message.text}
          </ChatMessage>
        ))}
      </Scroll>
      <ChatInput chatContact={chatContact} messages={messages} setMessages={setMessages} />
    </Container>
  );
};

import { useCallback, useEffect, useState } from "react";
import { chatMessages } from "../../../services";

import { Container } from "./styles";
import { Scroll } from '../../atoms'
import { ChatHeader, ChatMessage, ChatInput, Stickers } from '../../molecules'

export const MainChat = ({ chatContact }) => {
  const [messages, setMessages] = useState([])
  const [stickersVisibility, setStickersVisibility] = useState(false)
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
            message={message}
          >
            {message.text}
          </ChatMessage>
        ))}
      </Scroll>
      <Stickers 
        visibility={stickersVisibility}  
        messages={messages} 
        setMessages={setMessages}
        chatContact={chatContact}
      />
      <ChatInput 
        chatContact={chatContact} 
        messages={messages} 
        setMessages={setMessages} 
        setStickersVisibility={setStickersVisibility}
      />
    </Container>
  );
};

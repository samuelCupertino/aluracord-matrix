import { useEffect, useState, useCallback } from "react";

import { createClient } from '@supabase/supabase-js'
import { userLogged } from "../../../services";

import { Container } from "./styles";
import { Scroll } from '../../atoms'
import { ChatHeader, ChatMessage, ChatInput, Stickers } from '../../molecules'

const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MDg2OTA3MywiZXhwIjoxOTU2NDQ1MDczfQ.343ibq7UYFPDdyfsfGmEqUma01RW7P7KC9U2MDAGSkI';
const SUPABASE_URL = 'https://kysxypdmtxjlkdysdlas.supabase.co';

export const MainChatGroup = ({ chatContact }) => {
  const [messages, setMessages] = useState([])
  const [stickersVisibility, setStickersVisibility] = useState(false)
  const [messageLength, setMessageLength] = useState(20)
  const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  const { getUserLogged } = userLogged();

  const handleGetChatMessages = useCallback(async () => {
    const { data } = await supabaseClient
      .from('mensagens')
      .select('*')
      .order('id', { ascending: false })
      .limit(messageLength)

    setMessages(data.reverse())
  }, [messageLength])
  useEffect(handleGetChatMessages, [messageLength])

  const handleGetOldMessages = useCallback(() => {
    setMessageLength(messageLength => messageLength + 5)
  }, [])


  const handleListenerNewMessages = useCallback(async () => {
    supabaseClient
      .from('mensagens')
      .on('INSERT', ({ new:newMessage }) => {
        const { login:userLoggedLogin } = getUserLogged();
        
        if(newMessage.de !== userLoggedLogin) {
          setMessages(messages => [...messages, newMessage])
          console.log('Mensagem atualizada:', newMessage)
        }
      })
      .subscribe()
  }, [])
  useEffect(handleListenerNewMessages, [])


  const handleSendMessage = useCallback((newMessages) => {
    const lastMassage = newMessages[newMessages.length - 1]

    setMessages(newMessages)

    supabaseClient
      .from('mensagens')
      .insert(lastMassage)
      .then(({ data }) => {
        console.log('Mensagem inserida:', data)
      })
  }, [])


  return (
    <Container>
      <ChatHeader chatContact={chatContact}/>
      <Scroll padding={[10, 5, 20, 5]} autoScroll="bottom" seeMore={handleGetOldMessages}>
        {messages.map((message) => (
          <ChatMessage 
            key={message.de + message.created_at} 
            message={message} 
            showUserContact
          />
        ))}
      </Scroll>
      <Stickers 
        visibility={stickersVisibility} 
        messages={messages} 
        setMessages={handleSendMessage}
      />
      <ChatInput 
        chatContact={chatContact} 
        messages={messages} 
        setMessages={handleSendMessage}
        setStickersVisibility={setStickersVisibility}
      />
    </Container>
  );
};

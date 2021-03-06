import { useState, useEffect, useCallback } from "react";
import { SiWechat } from 'react-icons/si'

import { userLogged, chatContacts } from "../../../services";

import { Container } from "./styles";
import { Scroll, Text, Wrapper, Icon } from "../../atoms";
import { UserInfo } from "../../molecules";

export const AsideChat = ({ setChatContact }) => {
  const { getUserLogged } = userLogged()
  const { setChatContacts } = chatContacts()
  const [contacts, setContacts] = useState([])
  const [contactSelected, setContactSelected] = useState({})
  const [isOpenListContacts, setIsOpenListContacts] = useState(true)
  const groupAluraCord = {name:'AluraCord', login:'', avatar:'images/alura.jpg'}

  const getContacts = useCallback(async () => {
    const user = await getUserLogged()
    const userContacts = await setChatContacts(user.login)

    setContacts(userContacts);
  }, [])
  useEffect(getContacts, []);

  const initChatMessages = useCallback(() => {
    setContactSelected(groupAluraCord)
    setChatContact(groupAluraCord)
  }, [contacts]);
  useEffect(initChatMessages, [contacts])

  const handleClickContact = useCallback((contact) => {
    setContactSelected(contact)
    setChatContact(contact);
    setIsOpenListContacts(false)
  }, []);



  return (
    <Container isOpen={isOpenListContacts}>
      <Wrapper 
        height={60} 
        bgColor="neutrals"
        bgOpacity={0.5}
        flexDirection="row"
        alignItems="center"
      >
        <Wrapper 
          onClick={()=> setIsOpenListContacts(!isOpenListContacts)} 
          cursor="pointer" 
          width={75} 
          minWidth={75} 
          height={60} 
          justifyContent="center"
          alignItems="center"
          borderRadius={[0,0,20,0]}
          bgColor="primary"
          bgColorWeight={600}
          bgOpacity={0.35}
        >
          <SiWechat color="white" fontSize={28}/>
        </Wrapper>
        {isOpenListContacts && <Text fontSize={14} margin={['auto']} maxLine={1}>AluraVerso-Chat</Text>}
      </Wrapper>

      <Scroll 
        scrollBarDir="rtl" 
        borderWidth={[20]} 
        borderWidth={[0, 2, 0, 0]}
      >
        <UserInfo 
          userData={groupAluraCord} 
          padding={[10, 5]}
          active={groupAluraCord.login === contactSelected.login}
          onClick={() => handleClickContact(groupAluraCord)}
          hoverEffect
        />

        {contacts.map((follower) => (
          <UserInfo 
            key={follower.login} 
            userData={follower} 
            padding={[10, 5]}
            active={follower.login === contactSelected.login}
            onClick={() => handleClickContact(follower)}
            hoverEffect
          />
        ))}
      </Scroll>

    </Container>
  );
};

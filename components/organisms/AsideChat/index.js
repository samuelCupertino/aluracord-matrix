import { useState, useEffect } from "react";
import { userLogged, chatContacts } from "../../../services";

import { Container } from "./styles";
import { Scroll, Text, Wrapper, Image } from "../../atoms";
import { UserInfo } from "../../molecules";

export const AsideChat = ({ setChatContact }) => {
  const { getUserLogged } = userLogged()
  const { setChatContacts } = chatContacts()
  const [contacts, setContacts] = useState([])
  const [contactSelected, setContactSelected] = useState({})
  
  useEffect(async () => {
    const user = await getUserLogged()
    const userContacts = await setChatContacts(user.login)

    setContacts(userContacts);
  }, []);

  const handleClickContact = (contact) => {
    setContactSelected(contact)
    setChatContact(contact);
  };

  return (
    <Container>
      <Wrapper 
        height={60} 
        bgColor="neutrals"
        bgOpacity={0.5}
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
      >
        <Image src="/images/logo.jpeg" alt="logo" width="3rem" />
        <Text fontSize={14} align="center">AluraVerso - Chat</Text>
      </Wrapper>

      <Scroll 
        scrollBarDir="rtl" 
        borderWidth={[20]} 
        borderWidth={[0, 2, 0, 0]}
      >
        {contacts.map((follower) => (
          <UserInfo 
            key={follower.login} 
            userData={follower} 
            padding={[10, 5]}
            active={contactSelected.login === follower.login}
            onClick={() => handleClickContact(follower)}
            hoverEffect
          />
        ))}
      </Scroll>

    </Container>
  );
};

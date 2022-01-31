import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { RiLogoutCircleRLine } from 'react-icons/ri'

import { userLogged, chatContacts } from '../../../services';

import { Wrapper } from '../../atoms';
import { UserInfo } from "../../molecules";
import { Container } from "./styles";

export const ChatHeader = ({ chatContact }) => {
  const [userLoggedData, setUserLoggedData] = useState({});
  const { getUserLogged, clearUserLogged } = userLogged();
  const { clearChatContacts } = chatContacts();
  const router = useRouter();
  
  useEffect(() => {
    const user = getUserLogged();
    setUserLoggedData(user);
  }, []);

  const handleUserLogout = () => {
    clearUserLogged();
    clearChatContacts();
    router.push('/');
  }

  return (
    <Container>
      <UserInfo userData={chatContact} padding={[0,10,0,0]}/>
      <Wrapper flexDirection="row">
        <UserInfo userData={userLoggedData} reverse />
        <Wrapper 
          padding={[15,15,15,20]}
          justifyContent="center"
          alignItems="center"
          cursor="pointer"
          onClick={handleUserLogout}
        >
          <RiLogoutCircleRLine color="white" fontSize={24} />
        </Wrapper>
      </Wrapper>
    </Container>
  );
};

import { useState, useEffect } from 'react';
import { userLogged } from '../../../services';

import { UserInfo } from "../../molecules";
import { Container } from "./styles";

export const ChatHeader = ({ chatContact }) => {
  const [userLoggedData, setUserLoggedData] = useState({});
  const { getUserLogged } = userLogged();
  
  useEffect(() => {
    const user = getUserLogged();
    setUserLoggedData(user);
  }, []);

  return (
    <Container>
      <UserInfo userData={chatContact} padding={[0,10,0,0]}/>
      <UserInfo userData={userLoggedData} reverse />
    </Container>
  );
};

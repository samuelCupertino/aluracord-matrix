import { useState, useEffect } from 'react';
import { userLogged } from '../../../services';

import { UserInfo } from "..";
import { Container } from "./styles";

export const ChatHeader = ({ chatContact }) => {
  const [userLoggedData, setUserLoggedData] = useState({});
  const { getUserLogged } = userLogged();
  
  useEffect(() => {
    const user = getUserLogged();
    console.log(user)
    setUserLoggedData(user);
  }, []);

  return (
    <Container>
      {chatContact && <UserInfo userData={chatContact} />}
      <UserInfo userData={userLoggedData} reverse />
    </Container>
  );
};

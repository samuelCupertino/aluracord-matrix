import { useState, useEffect } from "react";
import { getUserData, storageData } from "../../../services";

import { Container } from "./styles";
import { Scroll } from "../../atoms";
import { UserInfo } from "../../molecules";

export const AsideChat = () => {
  const { userLogged } = storageData()
  const userData = userLogged()
  
  useEffect(async () => {
    console.log(userData)
  }, []);

  return (
    <Container>
      <Scroll>
        {userData.followers?.map(follower => (
          <UserInfo key={follower.login} userData={follower} padding={[10, 5]}/>
        ))}

      </Scroll>
    </Container>
  );
};

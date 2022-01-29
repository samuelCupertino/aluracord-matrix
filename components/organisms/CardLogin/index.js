import { useState } from "react";

import { Container } from "./styles";
import { CardProfile, FormLogin } from "../../molecules";

export const CardLogin = () => {
  const [userLogin, setUserLogin] = useState("");
  const [checkUser, setCheckUser] = useState(false);

  return (
    <Container>
      <FormLogin {...{ userLogin, setUserLogin, setCheckUser }} />
      <CardProfile {...{ userLogin, setUserLogin, checkUser, setCheckUser }} />
    </Container>
  );
};

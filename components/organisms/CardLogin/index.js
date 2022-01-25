import { useState } from "react";

import { Container } from "./styles";
import { CardProfile, FormLogin } from "../../molecules";

export const CardLogin = () => {
  const [userName, setUserName] = useState("");

  return (
    <Container>
      <FormLogin {...{ userName, setUserName }} />
      <CardProfile userName={userName} />
    </Container>
  );
};

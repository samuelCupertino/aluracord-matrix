import { useState } from "react";

import { Container } from "./styles";
import { CardProfile, FormLogin } from "../../molecules";

export const CardLogin = () => {
  const [userName, setUserName] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <Container>
      <FormLogin {...{ userName, setUserName, setSubmit }} />
      <CardProfile 
        userName={userName} 
        eyeClosed={submit ? '0%' : '100%'}
      />
    </Container>
  );
};

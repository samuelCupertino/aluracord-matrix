import { useState } from "react";

import { Container } from "./styles";
import { CardProfile, FormLogin } from "../../molecules";

export const CardLogin = () => {
  const [userLogin, setUserLogin] = useState("");
  const [submit, setSubmit] = useState(false);

  return (
    <Container>
      <FormLogin {...{ userLogin, setUserLogin, setSubmit }} />
      <CardProfile userLogin={userLogin} eyeClosed={submit ? "0%" : "100%"} />
    </Container>
  );
};

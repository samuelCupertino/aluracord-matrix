import { useRouter } from "next/router";

import { Title, Text, Input, Button } from "../../atoms";
import { Container } from "./styles";

export const FormLogin = ({ userLogin, setUserLogin, setSubmit }) => {
  const router = useRouter();

  const handleSubmit = () => {
    setSubmit(true);
    router.push("/chat");
  };

  return (
    <Container>
      <Title align="center">Boas vindas de volta!</Title>
      <Text margin={[0, "auto", 15, "auto"]}>Chat - AluraVerso</Text>
      <Input value={userLogin} onChange={ev => setUserLogin(ev.target.value)} />
      <Button onClick={handleSubmit}>Entrar</Button>
    </Container>
  );
};

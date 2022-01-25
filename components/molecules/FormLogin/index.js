import { Title, Text, Input, Button } from "../../atoms";
import { Container } from "./styles";

export const FormLogin = ({ userName, setUserName }) => {
  return (
    <Container>
      <Title align="center">Boas vindas de volta!</Title>
      <Text margin={[0, "auto", 15, "auto"]}>Aluracord - Matrix</Text>
      <Input value={userName} onChange={(ev) => setUserName(ev.target.value)} />
      <Button>Entrar</Button>
    </Container>
  );
};

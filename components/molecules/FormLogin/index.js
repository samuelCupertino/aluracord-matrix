import { Title, Text, Input, Button } from "../../atoms";
import { Container } from "./styles";

export const FormLogin = () => {
  return (
    <Container>
      <Title align="center">Boas vindas de volta!</Title>
      <Text margin={[0, "auto", 15, "auto"]}>Aluracord - Matrix (peas)</Text>
      <Input />
      <Button>Entrar</Button>
    </Container>
  );
};

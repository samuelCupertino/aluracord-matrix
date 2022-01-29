import { Title, Text, Input, Button } from "../../atoms";
import { Container } from "./styles";

export const FormLogin = ({ userLogin, setUserLogin, setCheckUser }) => {

  const handleSubmit = () => {
    setCheckUser(true);
  };

  return (
    <Container>
      <Title align="center">Boas vindas de volta!</Title>
      <Text margin={[0, "auto", 15, "auto"]}>Chat - AluraVerso</Text>
      <Input
        borderRadius={[5]}
        value={userLogin} 
        onChange={ev => setUserLogin(ev.target.value)} />
      <Button 
        borderRadius={[5]}
        onClick={handleSubmit}
      >Entrar</Button>
    </Container>
  );
};

import { useCallback } from "react";
import { Title, Text, Input, Button } from "../../atoms";
import { Container } from "./styles";

export const FormLogin = ({ userLogin, setUserLogin, setCheckUser }) => {

  const handleSubmit = useCallback(() => {
    if(userLogin) setCheckUser(true);
  }, [userLogin]);

  return (
    <Container>
      <Title align="center">Boas vindas de volta!</Title>
      <Text margin={[0, "auto", 15, "auto"]}>Chat - AluraVerso</Text>
      <Input
        value={userLogin} 
        onChange={ev => setUserLogin(ev.target.value)} 
        width="auto"
        borderRadius={[5]}
        bgColor="neutrals"
        bgOpacity={0.65}
        hoverEffect
      />
      <Button 
        borderRadius={[5]}
        onClick={handleSubmit}
      >
        Entrar
      </Button>
    </Container>
  );
};

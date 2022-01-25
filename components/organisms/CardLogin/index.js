import { Container } from "./styles";
import { CardProfile, FormLogin } from "../../molecules";

export const CardLogin = () => {
  return (
    <Container>
      <FormLogin />
      <CardProfile />
    </Container>
  );
};

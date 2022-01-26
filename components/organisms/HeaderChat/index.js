import { UserInfo } from "../../molecules";
import { Container } from "./styles";

export const HeaderChat = () => {
  return (
    <Container>
      <UserInfo userLogin="samuelCupertino" />
      <UserInfo userLogin="samuelCupertino" reverse />
    </Container>
  );
};

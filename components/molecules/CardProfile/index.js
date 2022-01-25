import { Text, Image } from "../../atoms";
import { Container } from "./styles";

export const CardProfile = () => {
  return (
    <Container>
      <Image src="https://github.com/samuelCupertino.png" alt="profile image" />
      <Text margin={["auto"]} bgColor="neutrals">
        samuelCupertino
      </Text>
    </Container>
  );
};

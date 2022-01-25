import { Container } from "./styles";

export const SpaceBackground = ({ children }) => {
  return (
    <Container>
      {children}
      <div className="star-1"></div>
      <div className="star-2"></div>
      <div className="star-3"></div>
    </Container>
  );
};

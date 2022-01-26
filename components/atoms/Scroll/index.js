import { Container } from "./styles";

export const Scroll = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

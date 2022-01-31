import { Container } from "./styles";

export const HorizontalScroll = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

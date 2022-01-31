import { CustomContainer } from "./styles";

export const Link = ({ children, ...props }) => {
  return <CustomContainer {...props}>{children}</CustomContainer>;
};

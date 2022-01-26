import { CustomContainer } from "./styles";

export const Wrapper = ({ children, ...props }) => {
  return <CustomContainer {...props}>{children}</CustomContainer>;
};

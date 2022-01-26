import { CustomButton } from "./styles";

export const Button = ({ children, ...props }) => {
  return <CustomButton {...props}>{children}</CustomButton>;
};

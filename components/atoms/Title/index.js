import { CustomTitle } from "./styles";

export const Title = ({ children, ...props }) => {
  return <CustomTitle {...props}>{children}</CustomTitle>;
};

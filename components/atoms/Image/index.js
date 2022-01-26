import { CustomImage } from "./styles";

export const Image = ({ children, ...props }) => {
  return <CustomImage {...props}>{children}</CustomImage>;
};

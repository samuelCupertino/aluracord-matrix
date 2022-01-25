import { CustomImage } from "./styles";

export const Image = ({ src, alt, children }) => {
  return (
    <CustomImage src={src} alt={alt}>
      {children}
    </CustomImage>
  );
};

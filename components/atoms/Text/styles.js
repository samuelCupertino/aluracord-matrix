import styled from "styled-components";
import { theme, clockProps } from "../../../styles";

export const CustomText = styled.p`
  text-align: center;
  color: ${theme.colors.neutrals[300]};
  border-radius: 1rem;
  width: fit-content;
  font-size: ${({ fontSize = 10 }) => `${fontSize}pt`};
  margin: ${({ margin }) => clockProps(margin)};
  padding: ${({ padding = ["3px", "0.5rem"] }) => clockProps(padding)};
  background-color: ${({ bgColor, bgColorWeight = 900 }) =>
    theme.colors[bgColor]?.[bgColorWeight]};
  text-align: ${({ align }) => align};

  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

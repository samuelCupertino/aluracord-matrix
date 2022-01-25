import styled from "styled-components";
import { theme, clockProps } from "../../../styles";

export const CustomText = styled.p`
  text-align: center;
  color: ${theme.colors.neutrals[300]};
  font-size: 10pt;
  border-radius: 1rem;
  width: fit-content;
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

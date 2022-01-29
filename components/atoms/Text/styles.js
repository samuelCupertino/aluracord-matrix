import styled from "styled-components";
import { theme, clockProps, toAlphaHex } from "../../../styles";

export const CustomText = styled.p`
  text-align: center;
  width: fit-content;
  max-width: ${({ maxWidth }) => maxWidth};
  font-size: ${({ fontSize = 10 }) => `${fontSize}pt`};
  text-align: ${({ align }) => align};
  margin: ${({ margin }) => clockProps(margin)};
  padding: ${({ padding = ["3px", "0.5rem"] }) => clockProps(padding)};
  border-radius: ${({ borderRadius = ["1rem"] }) => clockProps(borderRadius)};
  color: ${({ color='neutrals', colorWeight=300, opacity=1 }) =>
    theme.colors[color]?.[colorWeight] + toAlphaHex(opacity)};
  background-color: ${({ bgColor, bgColorWeight = 900, bgOpacity }) =>
    theme.colors[bgColor]?.[bgColorWeight] + toAlphaHex(bgOpacity)};

  ${({ maxLine }) => maxLine && `
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    @supports (-webkit-line-clamp: 2) {
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: ${maxLine};
      -webkit-box-orient: vertical;
    }
  `}

`;

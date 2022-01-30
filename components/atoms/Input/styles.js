import styled from "styled-components";
import { theme, clockProps, toAlphaHex } from "../../../styles";

export const CustomInput = styled.input`
  background: ${theme.colors.neutrals["800"]+"aa"};
  padding: 0.75rem;
  width: ${({ width }) => width};
  color: ${theme.colors.neutrals["000"]};
  font-size: 12pt;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.colors.neutrals["900"]};
  transition: all 0.1s ease-in-out;

  border-radius: ${({ borderRadius=[] }) => clockProps(borderRadius)};
  border-color: ${({ borderColor, borderColorWeight=900, borderOpacity=1 }) => {
    const color = theme.colors[borderColor]?.[borderColorWeight]
    return color ? color + toAlphaHex(borderOpacity) : "transparent"
  }};
  background-color: ${({ bgColor, bgColorWeight = 900, bgOpacity=1 }) => {
    const color = theme.colors[bgColor]?.[bgColorWeight]
    return color ? color + toAlphaHex(bgOpacity) : "transparent"
  }};


  ${({ hoverEffect }) => hoverEffect && `
    &:hover {
      border-color: ${theme.colors.primary["900"]};
    }
  `}
`;

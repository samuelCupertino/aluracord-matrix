import styled from "styled-components";
import { theme, toAlphaHex } from "../../../styles";

export const CustomContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: ${({ flexDirection='column' }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;

  background-color: ${({ bgColor, bgColorWeight = 900, bgOpacity }) => {
    const color = theme.colors[bgColor]?.[bgColorWeight]
    return color ? color + toAlphaHex(bgOpacity) : "transparent"
  }};
`;

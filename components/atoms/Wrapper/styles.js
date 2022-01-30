import styled from "styled-components";
import { theme, clockProps, toAlphaHex } from "../../../styles";

export const CustomContainer = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: ${({ flexDirection='column' }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  min-width: ${({ minWidth }) => minWidth}px;
  width: ${({ width }) => width};
  min-height: ${({ minHeight }) => minHeight}px;
  height: ${({ height }) => height}px;
  aspect-ratio: ${({ aspectRatio }) => aspectRatio};
  border-radius: ${({ borderRadius=[] }) => clockProps(borderRadius)};
  padding: ${({ padding=[] }) => clockProps(padding)};
  margin: ${({ margin=[] }) => clockProps(margin)};
  cursor: ${({ cursor }) => cursor};

  

  background-color: ${({ bgColor, bgColorWeight = 900, bgOpacity }) => {
    const color = theme.colors[bgColor]?.[bgColorWeight]
    return color ? color + toAlphaHex(bgOpacity) : "transparent"
  }};
`;

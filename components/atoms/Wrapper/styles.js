import styled from "styled-components";

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  border-radius: ${({ borderRadius }) => borderRadius}px;
`;

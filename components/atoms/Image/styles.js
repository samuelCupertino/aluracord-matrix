import styled from "styled-components";
import { clockProps } from "../../../styles";

export const CustomImage = styled.img`
  width: ${({ width = "100%" }) => width};
  aspect-ratio: 1;
  border-radius: ${({ borderRadius=[] }) => clockProps(borderRadius)};

  padding: ${({ padding = [] }) => clockProps(padding)};
  margin: ${({ margin = [] }) => clockProps(margin)};
  cursor: ${({ cursor }) => cursor};
`;

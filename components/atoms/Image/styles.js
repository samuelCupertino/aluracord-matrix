import styled from "styled-components";

export const CustomImage = styled.img`
  width: ${({ width = "100%" }) => width};
  aspect-ratio: 1;
  border-radius: 50%;
`;

import styled from "styled-components";

export const CustomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${({ alignItems }) => alignItems};
`;

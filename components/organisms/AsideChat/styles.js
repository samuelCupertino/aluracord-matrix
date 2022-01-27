import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div` {
  grid-area: aside;
  background-color: ${theme.colors.neutrals["600"] + "aa"};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem 0 0.5rem 0.25rem;
  border-right: 2px solid ${theme.colors.primary["800"]};
`;

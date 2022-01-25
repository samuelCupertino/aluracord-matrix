import styled from "styled-components";
import { theme } from "../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background: ${theme.colors.neutrals["800"]};
  border-radius: 0.5rem;
  border: 1px solid ${theme.colors.neutrals["900"]};
`;

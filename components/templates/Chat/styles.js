import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  width: 90vw;
  height: 90vh;
  margin: 5vh 5vw;
  display: flex;
  border: 2px solid ${theme.colors.primary["800"]};
  border-radius: 1rem;
  overflow: hidden;
`;

import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  width: 90vw;
  height: 90vh;
  margin: 5vh 5vw;
  display: grid;
  grid-template-areas: "header header" "aside main";
  grid-template-rows: 4rem calc(100% - 4rem);
  grid-template-columns: 15rem auto;
  border: 2px solid ${theme.colors.primary["800"]};
  border-radius: 1rem;
  overflow: hidden;
`;

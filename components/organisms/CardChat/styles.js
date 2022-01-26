import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  width: 90vw;
  height: 90vh;
  display: grid;
  grid-template-areas: "header header" "aside main";
  grid-template-rows: 4rem auto;
  grid-template-columns: 10rem auto;
  border: 2px solid ${theme.colors.primary["800"]};
  border-radius: 1rem;
  overflow: hidden;

  header {
    display: grid;
    grid-area: header;
    background-color: ${theme.colors.neutrals["700"] + "aa"};
  }

  aside {
    display: grid;
    grid-area: aside;
    background-color: ${theme.colors.neutrals["600"] + "aa"};
  }

  main {
    display: grid;
    grid-area: main;
    background-color: ${theme.colors.neutrals["500"] + "aa"};
  }
`;

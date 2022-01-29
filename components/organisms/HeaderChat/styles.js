import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  grid-area: header;
  background-color: ${theme.colors.neutrals["700"] + "aa"};
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 15rem 1fr 1fr;
  align-items: center;
  justify-content: space-between;
`;

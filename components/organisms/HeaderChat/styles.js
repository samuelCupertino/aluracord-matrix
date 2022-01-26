import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  grid-area: header;
  background-color: ${theme.colors.neutrals["700"] + "aa"};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

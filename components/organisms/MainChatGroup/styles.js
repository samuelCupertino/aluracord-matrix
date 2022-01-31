import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div` {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: auto;
  background-color: ${theme.colors.neutrals["500"] + "aa"};
`;

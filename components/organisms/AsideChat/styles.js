import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div` {
  width: 250px;
  background-color: ${theme.colors.neutrals["600"] + "aa"};
  display: flex;
  flex-direction: column;
`;

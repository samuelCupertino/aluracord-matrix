import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div` {
  width: 75px;
  min-width: 75px;
  background-color: ${theme.colors.neutrals["600"] + "aa"};
  display: flex;
  flex-direction: column;
  transition: all 1s ease-out;

  ${({ isOpen }) => isOpen && `
    min-width: 250px;
  `}

`;

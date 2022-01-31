import styled from "styled-components";
import { theme, toAlphaHex } from "../../../styles";

export const Container = styled.div`
  height: 60px;
  min-width: 250px;
  background-color: ${theme.colors.neutrals["900"] + toAlphaHex(0.6)};
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;


  @media (max-width: 725px) {
    min-width: 0;
    & > *:last-child > * {
      width: 55px;
    }
  }
  @media (max-width: 350px) {
    & > *:first-child {
      width: 55px;
    }
  }
`;

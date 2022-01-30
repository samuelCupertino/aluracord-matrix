import styled from "styled-components";
import { theme, toAlphaHex } from "../../../styles";

export const Container = styled.div`
  height: 60px;
  background-color: ${theme.colors.neutrals["900"] + toAlphaHex(0.6)};
  padding: 0 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

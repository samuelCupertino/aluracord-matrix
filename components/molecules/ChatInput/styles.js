import styled from "styled-components";
import { theme, toAlphaHex } from "../../../styles";

export const Container = styled.div` 
  display: flex;
  border-top: 2px solid ${theme.colors.primary["800"]};
  background-color: ${theme.colors.neutrals["900"] + toAlphaHex(0.5)};
`;

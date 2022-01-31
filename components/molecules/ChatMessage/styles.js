import styled from "styled-components";
import { theme, clockProps, toAlphaHex } from "../../../styles";

export const Container = styled.div`
  max-width: 350px;
  display: flex;
  align-self: self-start;
  flex-direction: column;
  
  border-radius: 0 20px 20px;
  padding: 8px 12px;
  margin: 4px;

  background-color: ${theme.colors.neutrals["400"] + toAlphaHex(0.65)};

  ${({ isAuthor }) => isAuthor && `
    align-self: self-end;
    background-color: ${theme.colors.primary["300"] + toAlphaHex(0.65)};
    border-radius: 20px 0 20px 20px;
  `}
`;

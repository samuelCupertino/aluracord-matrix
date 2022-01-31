import styled from "styled-components";
import { theme, toAlphaHex } from "../../../styles";

export const Container = styled.div`
  height: ${({ height="95px" }) => height};
  display: flex;
  gap: 25px;
  padding: 20px 20px 5px 20px;
  flex-flow: wrap;
  flex-direction: column;
  overflow: scroll hidden;

  background: ${theme.colors.neutrals["800"] + toAlphaHex(0.5)};

  &::-webkit-scrollbar {
    height: 3px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.neutrals["900"] + toAlphaHex(0.5)};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary["800"]};
  }
`;

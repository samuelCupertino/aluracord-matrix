import styled from "styled-components";
import { theme, clockProps } from "../../../styles";

export const Container = styled.div`
  width: 100%;
  overflow: hidden Scroll;
  padding-left: 0.25rem;
  display: flex;
  flex-direction: column;

  direction: ${({scrollBarDir}) => scrollBarDir};
  gap: ${({ gap=0 }) => gap}px;
  flex: ${({ flex=1 }) => flex};
  padding: ${({ padding=[] }) => clockProps(padding)};

  & > * {
    direction: ltr;
  }

  & > *:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.neutrals["500"]};
  }

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.neutrals["600"] + "aa"};
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary["900"]};
    border-radius: 0.25rem;
  }
`;

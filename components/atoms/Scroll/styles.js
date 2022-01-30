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
  margin: ${({ margin=[] }) => clockProps(margin)};

  border-style: solid;
  border-color: ${ theme.colors.primary["800"] };
  border-width: ${({ borderWidth=[0] }) => clockProps(borderWidth)};



  & > * {
    direction: ltr;
  }

  & > *:not(:last-child) {
    border-bottom: 1px solid ${theme.colors.neutrals["500"]};
  }

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.neutrals["900"] + "aa"};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary["800"]};
    border-radius: 10px;
  }
`;

import styled from "styled-components";
import { theme, clockProps } from "../../../styles";


export const Container = styled.div`
  width: 100%;
  box-sizing: border-box;
  overflow: ${({ flexDirection }) => flexDirection==='column' ? 'Scroll hidden' : 'hidden Scroll'};
  padding-left: 0.25rem;
  display: flex;
  flex-direction: ${({ flexDirection='column' }) => flexDirection};

  direction: ${({scrollBarDir}) => scrollBarDir};
  gap: ${({ gap=0 }) => gap}px;
  flex: ${({ flex=1 }) => flex};
  padding: ${({ padding=[] }) => clockProps(padding)};
  margin: ${({ margin=[] }) => clockProps(margin)};

  border-style: solid;
  border-color: ${ theme.colors.primary["800"] };
  border-width: ${({ borderWidth=[0] }) => clockProps(borderWidth)};


  ${({ height })=> height && `
    flex-flow: wrap;
    height: 20px;
  `} 

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
  }
`;

export const SeeMore = styled.button`
    color: ${theme.colors.neutrals["200"]};
    background: ${theme.colors.neutrals["500"]};
    border: 0;
    border-radius: 2rem;
    font-size: 12pt;
    width: fit-content;
    padding: 5px 10px;
    margin: auto;
    margin-bottom: 5px;
    cursor: pointer;
`;

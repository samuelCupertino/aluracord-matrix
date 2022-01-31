import styled from "styled-components";
import { theme, clockProps, toAlphaHex } from "../../../styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
  transition: 1s;

  opacity: 0;
  max-height: 0;
  ${({ visibility }) => visibility && `
    opacity: 1;
    max-height: 200px;
    padding: 5px 0;
  `};

  > div {
    height: 95px;
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

    img {
      cursor: pointer;
      transition: 0.75s;
    }
    img:hover {
      transform: scale(1.35);
    }
  }



`;

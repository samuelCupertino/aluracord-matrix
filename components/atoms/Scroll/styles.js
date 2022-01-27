import styled from "styled-components";
import { theme } from "../../../config.json";

export const Container = styled.div`
  width: 100%;
  overflow: hidden Scroll;
  direction: rtl;
  padding-left: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: ${({ gap=0 }) => gap}px;

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

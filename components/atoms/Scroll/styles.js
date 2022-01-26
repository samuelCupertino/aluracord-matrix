import styled from "styled-components";
import { theme } from "../../../config.json";

export const Container = styled.div`
  width: 100%;
  overflow: hidden Scroll;
  direction: rtl;
  padding-left: 0.25rem;

  > * {
    direction: ltr;
  }

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.colors.neutrals["600"] + "aa"};
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.primary["900"]};
  }
`;

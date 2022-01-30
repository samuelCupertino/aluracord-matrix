import styled from "styled-components";
import { theme, clockProps } from "../../../styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.primary["500"]};
  position: relative;
  cursor: pointer;
  padding: ${({ padding=[] }) => clockProps(padding)};
  flex-direction: ${({ direction }) => direction};

  &::after {
    --size: 0.55rem;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 50%;
    left: calc(100% - var(--size));
    transform: translate(-50%, -50%);
    border-width: var(--size);
    border-style: solid;
    border-color: transparent;
    border-right-color: ${theme.colors.primary["800"]};

    display: ${({ active }) => (active ? "block" : "none")};
  }

  ${({ hoverEffect }) => hoverEffect && `
    &:hover::after {
      display: block;
    }
  `}
`;

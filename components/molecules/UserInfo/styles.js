import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${theme.colors.primary["500"]};
  border-radius: 0.5rem;
  position: relative;
  cursor: pointer;
  padding: ${({ padding }) => padding};
  flex-direction: ${({ direction }) => direction};

  &:hover::after,
  &.active::after {
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

    display: ${({ hoverEffect }) => (hoverEffect ? "block" : "none")};
  }
`;

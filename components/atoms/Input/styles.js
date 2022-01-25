import styled from "styled-components";
import { theme } from "../../../config.json";

export const CustomInput = styled.input`
  background: ${theme.colors.neutrals["800"]};
  padding: 0.75rem;
  border: 1px solid ${theme.colors.neutrals["900"]};
  border-radius: 0.5rem;
  width: 100%;
  color: ${theme.colors.neutrals["000"]};
  font-size: 12pt;
  outline: none;
  transition: all 0.1s ease-in-out;

  &:hover {
    border: 1px solid ${theme.colors.primary["900"]};
  }
`;

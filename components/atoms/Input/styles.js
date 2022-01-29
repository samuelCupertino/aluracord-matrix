import styled from "styled-components";
import { theme, clockProps } from "../../../styles";

export const CustomInput = styled.input`
  background: ${theme.colors.neutrals["800"]+"aa"};
  padding: 0.75rem;
  width: 100%;
  color: ${theme.colors.neutrals["000"]};
  font-size: 12pt;
  outline: none;
  border-width: 1px;
  border-style: solid;
  border-color: ${theme.colors.neutrals["900"]};
  transition: all 0.1s ease-in-out;

  border-radius: ${({ borderRadius=[] }) => clockProps(borderRadius)};

  &:hover {
    border-color: ${theme.colors.primary["900"]};
  }
`;

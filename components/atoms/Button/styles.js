import styled from "styled-components";
import { theme, clockProps } from "../../../styles";

export const CustomButton = styled.h1`
  color: ${theme.colors.neutrals["000"]};
  background: ${theme.colors.primary["500"]};
  text-align: center;
  font-size: 12pt;
  font-weight: normal;
  padding: 0.75rem;
  cursor: pointer;

  border-radius: ${({ borderRadius=[] }) => clockProps(borderRadius)};
  ${({})}
`;

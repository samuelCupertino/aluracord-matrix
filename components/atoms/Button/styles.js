import styled from "styled-components";
import { theme } from "../../../config.json";

export const CustomButton = styled.h1`
  color: ${theme.colors.neutrals["000"]};
  background: ${theme.colors.primary["500"]};
  text-align: center;
  border-radius: 0.25rem;
  font-size: 12pt;
  font-weight: normal;
  padding: 0.75rem;
  cursor: pointer;
`;

import styled from "styled-components";
import { theme } from "../../../styles";

export const CustomTitle = styled.h1`
  color: ${theme.colors.neutrals["000"]};
  text-align: ${({ align }) => align};
`;

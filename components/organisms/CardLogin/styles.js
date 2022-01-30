import styled from "styled-components";
import { theme } from "../../../styles";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;
  max-width: min(700px, 100%);
  background: ${theme.colors.neutrals["700"] + "cc"};
  border: 2px solid ${theme.colors.primary["900"]};
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem 1rem;

  @media (max-width: 555px) {
    display: flex;
    flex-direction: column-reverse;
    padding: 1.5rem;

    > :first-child {
      width: 100%;
      padding: 0;
    }

    > :last-child {
      width: 60%;
      height: ;
      margin: 0 auto;
    }
  }
`;

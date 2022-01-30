import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div` {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: auto;
  background-color: ${theme.colors.neutrals["500"] + "aa"};

  .input {
    display: flex;
    gap: 0.25rem;
    background: ${theme.colors.neutrals["800"]+'aa'};

    input {
      flex: 1;
      padding: 0.5rem 1rem;
      font-size: 12pt;
      border: none;
      color: ${theme.colors.neutrals["100"]};
      background: transparent;
      border-right: 2px solid ${theme.colors.neutrals["600"]};;

      &:focus {
        outline: none;
      }
    }

    button {
      width: 3rem;
      margin: 0.25rem;
      aspect-ratio: 1;
      border-radius: 50%;
      border: none;

      background-color: ${theme.colors.primary["900"]};
      background-image: url(https://www.swiftsmsgateway.com/wp-content/themes/swiftsms/library/images/icon_Airplane.png);
      border: none;
      background-size: 2rem;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;

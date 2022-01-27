import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const Container = styled.div` {
  grid-area: main;
  background-color: ${theme.colors.neutrals["500"] + "aa"};
  display: flex;
  flex-direction: column;
  height: auto;

  .historic {
    flex: 1;

    .message {
      width: fit-content;
      background: ${theme.colors.neutrals["400"]+"aa"};
      color: ${theme.colors.neutrals["200"]};
      margin: 0.5rem;
      padding: 0.5rem 0.75rem;
      border-radius: 0 0.75rem 0.75rem;
    }

    .message.user {
      border-radius: 0.75rem 0 0.75rem 0.75rem;
      margin-left: auto;
      background: ${theme.colors.primary["300"]+"aa"};
      color: ${theme.colors.neutrals["900"]};
    }
  }

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
      background-image: url(http://cdn.onlinewebfonts.com/svg/img_542962.png);
      border: none;
      background-size: 2rem;
      background-position: center;
      background-repeat: no-repeat;
    }
  }
`;

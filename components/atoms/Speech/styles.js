import styled from "styled-components";
import { theme } from "../../../styles";

export const Container = styled.div`
  width: 150px;
  height: 150px;
  margin-top: 20px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  background: radial-gradient(black, transparent);
  
  opacity: ${({ isSpeaking=false }) => isSpeaking ? 1 : 0};
  z-index: 999;
  transition: 1s;
  

  & .multi-spinner {
    position: absolute;
    width: calc(100% - 9.9px);
    height: calc(100% - 9.9px);
    border: 5px solid transparent;
    border-top-color: ${theme.colors.primary["900"]};
    border-radius: 50%;
    -webkit-animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
    animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;
  }

  @keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;

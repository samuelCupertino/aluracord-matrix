import { useRef, useEffect } from "react";

import { Container } from "./styles";

export const Scroll = ({ children, autoScroll='top', ...props }) => {
  const chatRef = useRef();

  const handleChatScroll = () => {
    const scrollEl = chatRef.current;
    if(!scrollEl) return

    scrollEl.scrollTo({ 
      top: autoScroll === 'top' ? 0 : scrollEl.scrollHeight - scrollEl.clientHeight,
      behavior: "smooth" 
    })
  }
  useEffect(handleChatScroll, [children]);

  return <Container ref={chatRef} {...props}>{children}</Container>;
};

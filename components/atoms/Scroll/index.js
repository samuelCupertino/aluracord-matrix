import { useRef, useEffect } from "react";

import { Container } from "./styles";

export const Scroll = ({ children, autoScroll='top', ...props }) => {
  const chatRef = useRef();

  const handleChatScroll = () => {
    const scrollEl = chatRef.current;

    if(!scrollEl) return

    const top = autoScroll === 'top' ? 0 : scrollEl.scrollHeight - scrollEl.clientHeight;

    scrollEl.scrollTo({ top, behavior: "smooth" });
  };
  useEffect(handleChatScroll, [children]);

  return <Container ref={chatRef} {...props}>{children}</Container>;
};

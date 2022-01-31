import { useRef, useState, useEffect, useCallback} from "react";

import { Container, SeeMore } from "./styles";

export const Scroll = ({ children, autoScroll='top', seeMore, ...props }) => {
  const chatRef = useRef();
  const [isSeeMore, setIsSeeMore] = useState(false);

  const handleChatScroll = useCallback(() => {
    const scrollEl = chatRef.current;
    
    if(!scrollEl || isSeeMore) return

    scrollEl.scrollTo({ 
      top: autoScroll === 'top' ? 0 : scrollEl.scrollHeight - scrollEl.clientHeight,
      behavior: "smooth" 
    })
  }, [autoScroll, isSeeMore])
  useEffect(handleChatScroll, [children]);

  const handleSeeMore = useCallback(() => {
    setIsSeeMore(true)
    seeMore()
  }, [])

  const handleScrollBottomEnd = useCallback(() => {
    const scrollEl = chatRef.current;
    const scrollHeight = scrollEl.clientHeight + scrollEl.scrollTop

    if(scrollEl.scrollHeight !== scrollHeight) {
      setIsSeeMore(false)
    }
  }, [])

  return (
    <Container ref={chatRef} {...props} onScroll={handleScrollBottomEnd}>
      { seeMore && <SeeMore onClick={handleSeeMore}>Ver mais</SeeMore> }
      { children }
    </Container>
  )
};

import theme from "../../../config";

import { userLogged, chatMessages } from "../../../services";

import { Container } from "./styles";
import { HorizontalScroll, Image } from "../../atoms";

export const Stickers = ({ visibility, messages, setMessages, chatContact }) => {
  const stickers = theme.stickers;
  const { getUserLogged } = userLogged();
  const { setChatMessages } = chatMessages();

  const handleClick = sticker => {
    const user = getUserLogged();

    const newMessage = {
      created_at: new Date().toISOString(),
      de: user.login,
      texto: `:sticker:${sticker}`
    };

    setMessages([...messages, newMessage]);

    if(chatContact) {
      setChatMessages(chatContact.login, newMessage)
    }
  }

  return (
    <Container visibility={visibility}>
      <HorizontalScroll>
        {stickers.map((sticker, index) => (
          <Image
            key={index}
            src={sticker}
            alt="sticker"
            width="80px"
            onClick={()=> handleClick(sticker)}
          />
        ))}
      </HorizontalScroll>
    </Container>
  );
};

import { Container } from "./styles";
import { Text, Image, Link } from "../../atoms";

import { userLogged } from "../../../services";

export const ChatMessage = ({ message, showUserContact }) => {
  const { getUserLogged } = userLogged();
  const { login: userLoggedLogin } = getUserLogged();

  const formatDate = date => {
    const dateFormatted = new Date(date).toLocaleString();
    return dateFormatted;
  };

  const getText = messageText => {
    return messageText?.replace(/:sticker:.+[(png)(jpg)(gif)]/g, '')
  };

  const getSticker = messageText => {
    const Stickers = messageText?.match(/(?<=:sticker:.*)http.+[(png)(jpg)(gif)]/g)
    return Stickers?.map(sticker => (
      <Image key={sticker} src={sticker} />
    ))
  };

  return message.de === userLoggedLogin ? (
    <Container isAuthor>
      {showUserContact && (
        <Link
          flexDirection="row"
          alignItems="center"
          justifyContent="flex-end"
          padding={[0, 0, 10]}
          margin={[0, 0, 0, "auto"]}
          width="fit-content"
          href={`https://github.com/${message.de}`}
          target="_blanck"
        >
          <Text fontSize={14} color="neutrals" colorWeight={800} opacity={0.7}>
            {message.de}
          </Text>
          <Image src={`https://github.com/${message.de}.png`} width={40} borderRadius={['50%']} />
        </Link>
      )}

      <Text color="neutrals" colorWeight="900" opacity={0.85} fontSize={12}>
        {getText(message.texto)}
      </Text>
      {getSticker(message.texto)}
      <Text
        fontSize={9}
        color="neutrals"
        colorWeight={800}
        opacity={0.65}
        margin={[0, 0, 0, "auto"]}
        padding={[10, 0, 0]}
      >
        {formatDate(message.created_at)}
      </Text>
    </Container>
  ) : (
    <Container>
      <Link 
        flexDirection="row" 
        alignItems="center" 
        padding={[0, 0, 10]} 
        margin={[0, "auto", 0, 0]}
        width="fit-content"
        href={`https://github.com/${message.de}`}
        target="_blanck"
      >
        <Image src={`https://github.com/${message.de}.png`} width={40} borderRadius={['50%']} />
        <Text fontSize={14} color="neutrals" colorWeight={200} opacity={0.7}>
          {message.de}
        </Text>
      </Link>
      <Text color="neutrals" colorWeight={100} opacity={0.9} fontSize={12}>
        {getText(message.texto)}
      </Text>
      {getSticker(message.texto)}
      <Text
        fontSize={9}
        color="neutrals"
        colorWeight={300}
        opacity={0.85}
        margin={[0, 0, 0, "auto"]}
        padding={[10, 0, 0]}
      >
        {formatDate(message.created_at)}
      </Text>
    </Container>
  );
};

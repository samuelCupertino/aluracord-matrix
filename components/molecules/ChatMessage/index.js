import { Text } from "../../atoms";

export const ChatMessage = ({ children, isAuthor }) => {

  return isAuthor 
    ? (
      <Text
        color="neutrals"
        colorWeight="900"
        opacity={0.9}
        bgColor="primary"
        bgColorWeight="300"
        bgOpacity={0.65}
        borderRadius={[13, 0, 13, 13]}
        padding={[8, 12]}
        margin={[2, 0, 2, 'auto']}
        fontSize={12} 
        maxWidth="min(90%, 40rem)"
      >{children}</Text>
    )
    : (
      <Text 
        color="neutrals" 
        colorWeight="200" 
        opacity={0.75}
        bgColor="neutrals" 
        bgColorWeight="400" 
        bgOpacity={0.65}
        borderRadius={[0, 13, 13]}
        padding={[8, 12]}
        margin={[2]}
        fontSize={12} 
      >{children}</Text>
    );
};

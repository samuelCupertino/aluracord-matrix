export const chatMessages = () => {
  const DB = '@aluraVerso:chatMessages';

  const getChatMessages = (userLogin) => {
    const chatMessagesJson = localStorage.getItem(DB);
    const chatMessagesData = JSON.parse(chatMessagesJson || '[]');

    const chatMessages = chatMessagesData.find(message => message.userLogin === userLogin);

    return chatMessages;
  }

  const setChatMessages = (userLogin, messages) => {
    const chatMessagesJson = localStorage.getItem(DB);
    const chatMessagesData = JSON.parse(chatMessagesJson || '[]');

    const newChatMessages = chatMessagesData.map(chatMessage => chatMessage.userLogin === userLogin
      ? { userLogin: chatMessage.userLogin, messages: [...chatMessage.messages, messages] }
      : chatMessage
    );

    localStorage.setItem(DB, JSON.stringify(newChatMessages));
  }

  return {
    getChatMessages,
    setChatMessages
  }
};

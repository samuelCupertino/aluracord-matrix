export const chatMessages = () => {
  const DB = '@aluraVerso:chatMessages';

  const getChatMessages = (userLogin) => {
    const chatMessagesJson = localStorage.getItem(DB);
    const chatMessagesData = JSON.parse(chatMessagesJson || '[]');

    const chatMessages = chatMessagesData.find(message => message.userLogin === userLogin);

    return chatMessages?.messages || [];
  }

  const setChatMessages = (userLogin, messages) => {
    const chatMessagesJson = localStorage.getItem(DB);
    const chatMessagesData = JSON.parse(chatMessagesJson || '[]');
    const chatContactExist = chatMessagesData.some(chat => chat.userLogin === userLogin);
 
    const addChatMessages = () => [...chatMessagesData, { userLogin, messages: [messages] }]
    
    const editeChatMessage = () => chatMessagesData.map(chat => chat.userLogin === userLogin
      ? { userLogin, messages: [...chat.messages, messages] }
      : chat
    );

    const newChatMessages = chatContactExist ? editeChatMessage() : addChatMessages();

    localStorage.setItem(DB, JSON.stringify(newChatMessages));
    return newChatMessages;
  }

  const clearChatMessages = () => {
    localStorage.removeItem(DB);
  }

  return {
    getChatMessages,
    setChatMessages,
    clearChatMessages
  }
};

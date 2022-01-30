export const chatContacts = () => {
  const DB = '@aluraVerso:chatContacts';

  const getChatContacts = () => {
    const chatContactsJson = localStorage.getItem(DB);
    const chatContactsData = JSON.parse(chatContactsJson || '[]');

    return chatContactsData;
  }

  const setChatContacts = async (userLogin='samuelCupertino') => {
    const userFollowersData = await fetch(`https://api.github.com/users/${userLogin}/followers`)
    const userFollowers = await userFollowersData.json();

    const contacts = userFollowers.map(follower => ({
      name: follower.login,
      login: follower.login,
      avatar: follower.avatar_url,
    }))

    localStorage.setItem(DB, JSON.stringify(contacts));

    return contacts;
  }

  return {
    getChatContacts,
    setChatContacts
  }
};

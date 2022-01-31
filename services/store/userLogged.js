export const userLogged = () => {
  const DB = '@aluraVerso:userLogged';

  const getUserLogged = () => {
    const userLoggedJson = localStorage.getItem(DB);
    const userLoggedData = JSON.parse(userLoggedJson || null);

    return userLoggedData;
  }

  const setUserLogged = async (userLogin) => {
    const userGithubData = await fetch(`https://api.github.com/users/${userLogin}`);
    const userGithub = await userGithubData.json();

    const userData = {
      name: userGithub.name,
      login: userGithub.login,
      avatar: userGithub.avatar_url
    }

    localStorage.setItem(DB, JSON.stringify(userData));

    return userData;
  }

  const clearUserLogged = () => {
    localStorage.removeItem(DB);
  }

  return {
    getUserLogged,
    setUserLogged,
    clearUserLogged
  }
};

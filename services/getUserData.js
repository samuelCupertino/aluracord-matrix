export const getUserData = async (userName = "") => {
  const gitHubUserName = userName.trim();

  if (!gitHubUserName) return;

  const userRes = await fetch(`https://api.github.com/users/${gitHubUserName}`);

  if (!userRes.ok) return;

  const userData = await userRes.json();

  const newUser = {
    name: userData.name,
    login: userData.login,
    avatar: userData.avatar_url,
  };

  return newUser;
};

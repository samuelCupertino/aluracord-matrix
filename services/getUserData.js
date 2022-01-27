export const storageData = () => {
  const DB_USER = '@aluraVerso:userData';

  const userLogged = (newUserData={}) => {
    // if(newUserData.login) {
    // console.log(JSON.stringify(newUserData))
    //   localStorage.setItem(DB_USER, `{"name":"Samuel Cupertino ","login":"samuelCupertino","avatar":"https://avatars.githubusercontent.com/u/88355379?v=4","followers":[{"name":"Rayanne-zeff","login":"Rayanne-zeff","avatar":"https://avatars.githubusercontent.com/u/19708119?v=4"},{"name":"Diegosny","login":"Diegosny","avatar":"https://avatars.githubusercontent.com/u/39070151?v=4"},{"name":"leoneDuarte","login":"leoneDuarte","avatar":"https://avatars.githubusercontent.com/u/40296852?v=4"},{"name":"EllifasEmanuel","login":"EllifasEmanuel","avatar":"https://avatars.githubusercontent.com/u/61299040?v=4"},{"name":"kompysolucoes","login":"kompysolucoes","avatar":"https://avatars.githubusercontent.com/u/63202423?v=4"},{"name":"MarcosMacmillan","login":"MarcosMacmillan","avatar":"https://avatars.githubusercontent.com/u/73037394?v=4"},{"name":"Samuel-Cupertino","login":"Samuel-Cupertino","avatar":"https://avatars.githubusercontent.com/u/79454260?v=4"},{"name":"mono-rim-1","login":"mono-rim-1","avatar":"https://avatars.githubusercontent.com/u/84514213?v=4"},{"name":"estarlino","login":"estarlino","avatar":"https://avatars.githubusercontent.com/u/85007064?v=4"},{"name":"MatheusEVSouza","login":"MatheusEVSouza","avatar":"https://avatars.githubusercontent.com/u/88885147?v=4"}]}`);
    //   return newUserData;
    // }

    // localStorage.setItem(DB_USER, `{"name":"Samuel Cupertino ","login":"samuelCupertino","avatar":"https://avatars.githubusercontent.com/u/88355379?v=4","followers":[{"name":"Rayanne-zeff","login":"Rayanne-zeff","avatar":"https://avatars.githubusercontent.com/u/19708119?v=4"},{"name":"Diegosny","login":"Diegosny","avatar":"https://avatars.githubusercontent.com/u/39070151?v=4"},{"name":"leoneDuarte","login":"leoneDuarte","avatar":"https://avatars.githubusercontent.com/u/40296852?v=4"},{"name":"EllifasEmanuel","login":"EllifasEmanuel","avatar":"https://avatars.githubusercontent.com/u/61299040?v=4"},{"name":"kompysolucoes","login":"kompysolucoes","avatar":"https://avatars.githubusercontent.com/u/63202423?v=4"},{"name":"MarcosMacmillan","login":"MarcosMacmillan","avatar":"https://avatars.githubusercontent.com/u/73037394?v=4"},{"name":"Samuel-Cupertino","login":"Samuel-Cupertino","avatar":"https://avatars.githubusercontent.com/u/79454260?v=4"},{"name":"mono-rim-1","login":"mono-rim-1","avatar":"https://avatars.githubusercontent.com/u/84514213?v=4"},{"name":"estarlino","login":"estarlino","avatar":"https://avatars.githubusercontent.com/u/85007064?v=4"},{"name":"MatheusEVSouza","login":"MatheusEVSouza","avatar":"https://avatars.githubusercontent.com/u/88885147?v=4"}]}`);
      
    // const user = localStorage.getItem(DB_USER);
    // const userData = JSON.parse(user || '{}');

    // return userData;

    return {"name":"Samuel Cupertino ","login":"samuelCupertino","avatar":"https://avatars.githubusercontent.com/u/88355379?v=4","followers":[{"name":"Rayanne-zeff","login":"Rayanne-zeff","avatar":"https://avatars.githubusercontent.com/u/19708119?v=4"},{"name":"Diegosny","login":"Diegosny","avatar":"https://avatars.githubusercontent.com/u/39070151?v=4"},{"name":"leoneDuarte","login":"leoneDuarte","avatar":"https://avatars.githubusercontent.com/u/40296852?v=4"},{"name":"EllifasEmanuel","login":"EllifasEmanuel","avatar":"https://avatars.githubusercontent.com/u/61299040?v=4"},{"name":"kompysolucoes","login":"kompysolucoes","avatar":"https://avatars.githubusercontent.com/u/63202423?v=4"},{"name":"MarcosMacmillan","login":"MarcosMacmillan","avatar":"https://avatars.githubusercontent.com/u/73037394?v=4"},{"name":"Samuel-Cupertino","login":"Samuel-Cupertino","avatar":"https://avatars.githubusercontent.com/u/79454260?v=4"},{"name":"mono-rim-1","login":"mono-rim-1","avatar":"https://avatars.githubusercontent.com/u/84514213?v=4"},{"name":"estarlino","login":"estarlino","avatar":"https://avatars.githubusercontent.com/u/85007064?v=4"},{"name":"MatheusEVSouza","login":"MatheusEVSouza","avatar":"https://avatars.githubusercontent.com/u/88885147?v=4"}]}
  }

  return {
    userLogged
  }
}

export const getUserData = async (userName = "") => {
  const gitHubUserName = userName.trim();

  if (!gitHubUserName) return;

  const userRes = await fetch(`https://api.github.com/users/${gitHubUserName}`);
  const followersRes = await fetch(`https://api.github.com/users/${gitHubUserName}/followers`)
  
  if (!userRes.ok || !followersRes.ok) return;

  const userData = await userRes.json();
  const followersData = await followersRes.json();

  const newUser = {
    name: userData.name,
    login: userData.login,
    avatar: userData.avatar_url,
    followers: followersData.map(follower => ({
      name: follower.login,
      login: follower.login,
      avatar: follower.avatar_url,
    })),
  };

  const { userLogged } = storageData();

  userLogged(newUser);

  return newUser;
};

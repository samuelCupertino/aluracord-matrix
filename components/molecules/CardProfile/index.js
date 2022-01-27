import { useState, useCallback, useEffect, useMemo } from "react";
import { getUserData } from "../../../services/getUserData";
import { Text, Image, EyeFacialRecognition } from "../../atoms";
import { Container } from "./styles";

export const CardProfile = ({ userLogin, eyeClosed }) => {
  const userDefault = useMemo(
    () => ({
      name: "Usuário não encontrado",
      avatar:
        "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
      followers: [],
    }),
    []
  );
  const [user, setUser] = useState(userDefault);
  const [timeSearch, setTimeSearch] = useState(null);

  // const getUserData = useCallback(async name => {
  //   const gitHubUserLogin = name.trim();

  //   if (!gitHubUserLogin) return userDefault;

  //   const userRes = await fetch(
  //     `https://api.github.com/users/${gitHubUserLogin}`
  //   );

  //   if (!userRes.ok) return userDefault;

  //   const userData = await userRes.json();

  //   const newUser = {
  //     name: userData.name,
  //     avatar: userData.avatar_url,
  //   };

  //   return newUser;
  // }, []);

  const searchData = useCallback(() => {
    clearTimeout(timeSearch);

    const time = setTimeout(async () => {
      const userData = await getUserData(userLogin);
      const user = userData || userDefault;
      setUser(user);
      localStorage.setItem("@aluraVerso:userData", user);
    }, 750);

    setTimeSearch(time);
  }, [timeSearch, userLogin]);

  useEffect(searchData, [userLogin]);

  return (
    <Container>
      <Image src={user.avatar} alt={`Foto de ${user.name}`} />
      <EyeFacialRecognition
        display={eyeClosed == "0%"}
        closed={eyeClosed}
        margin={["auto"]}
      />
      <Text margin={["auto"]} bgColor="neutrals">
        {user.name}
      </Text>
    </Container>
  );
};

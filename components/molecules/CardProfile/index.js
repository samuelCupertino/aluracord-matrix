import { useState, useCallback, useEffect, useMemo } from "react";
import { faceMatch } from '../../../services/FaceApi'
import { getUserData } from "../../../services/getUserData";

import { Text, Image, EyeFacialRecognition } from "../../atoms";
import { Container } from "./styles";

export const CardProfile = ({ userLogin, eyeClosed }) => {
  const userDefault = useMemo(
    () => ({
      name: "Usuário não encontrado",
      avatar: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
      followers: [],
    }),
    []
  );
  const [user, setUser] = useState(userDefault);
  const [timeSearch, setTimeSearch] = useState(null);

  const searchData = useCallback(() => {

    setTimeout(async () => {
      const res = await faceMatch(
        'https://avatars.githubusercontent.com/u/88355379?v=4', 
        `https://pbs.twimg.com/profile_images/930602367887822850/2v0lXfIR_400x400.jpg`
      )
      console.log(res)
    }, 10000)
      

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

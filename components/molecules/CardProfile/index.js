import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import Webcam from "react-webcam";
import { getUserData, faceMatch } from "../../../services";

import { Wrapper, Text, Image, EyeFacialRecognition } from "../../atoms";
import { Container } from "./styles";

export const CardProfile = ({ userLogin, setUserLogin, checkUser, setCheckUser }) => {
  const userDefault = useMemo(
    () => ({
      name: "Usuário não encontrado",
      avatar: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU",
      followers: [],
    }),
    []
  );
  const [userGithub, setUserGithub] = useState(userDefault);
  const [timeSearch, setTimeSearch] = useState(null);
  const webcamRef = useRef(null);
  const router = useRouter();

  const searchData = useCallback(() => {
    clearTimeout(timeSearch);

    const time = setTimeout(async () => {
      const userData = await getUserData(userLogin);
      const user = userData || userDefault;
      setUserGithub(user);
      // localStorage.setItem("@aluraVerso:userData", user);
    }, 750);

    setTimeSearch(time);
  }, [timeSearch, userLogin]);
  useEffect(searchData, [userLogin]);


  const faceRecognition = useCallback(async () => {
    setTimeout(async() => {
      const userImage = webcamRef.current.getScreenshot();
      const isSamePerson = await faceMatch(userGithub.avatar, userImage)
      
      if(!isSamePerson) {
        setUserLogin('')
        setCheckUser(false)
        return
      }

      router.push("/chat");
    }, 3000);

  }, [userGithub, webcamRef]);
  useEffect(()=> checkUser && faceRecognition(), [checkUser]);


  return (
    <Container>
      <Wrapper width={200} height={200} borderRadius={100}>
        {checkUser 
          ? (
            <Webcam 
              width={270} 
              mirrored
              ref={webcamRef}
              screenshotFormat="image/jpeg"
            />
          )
          : (
            <Image src={userGithub.avatar} />
          )
        }
      </Wrapper>

      <EyeFacialRecognition
        display={checkUser}
        opened={checkUser? '0%': '100%'}
        margin={["auto"]}
      />
      <Text margin={["auto"]} bgColor="neutrals">
        {userGithub.name}
      </Text>
    </Container>
  );
};

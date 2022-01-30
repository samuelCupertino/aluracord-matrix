import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import Webcam from "react-webcam";
import { getUserData, faceMatch, userLogged } from "../../../services";

import { Wrapper, Text, Image, EyeFacialRecognition, Speech } from "../../atoms";
import { Container } from "./styles";

export const CardProfile = ({ userLogin, setUserLogin, checkUser, setCheckUser }) => {
  const userDefault = useMemo(() => ({
    name: "Usuário não encontrado",
    avatar: "images/github-avatar.png",
    followers: [],
  }), []);
  const [userGithub, setUserGithub] = useState(userDefault);
  const [timeSearch, setTimeSearch] = useState(null);
  const [speechText, setSpeechText] = useState('');
  const webcamRef = useRef(null);
  const router = useRouter();
  const { setUserLogged } = userLogged();

  const searchData = useCallback(() => {
    clearTimeout(timeSearch);

    const time = setTimeout(async () => {
      const userData = await getUserData(userLogin);
      const user = userData || userDefault;
      setUserGithub(user);
    }, 750);

    setTimeSearch(time);
  }, [timeSearch, userLogin]);
  useEffect(searchData, [userLogin]);


  const faceRecognition = useCallback(async () => {
    
    if(!userGithub.avatar.includes('http')) {
      setCheckUser(false)
      return
    };

    setSpeechText('Realizando o reconhecimento facial...');

    const time = setInterval(async() => {
      const userImage = webcamRef?.current.getScreenshot();

      if(!userImage) return

      clearInterval(time);
      const isSamePerson = await faceMatch(userGithub.avatar, userImage)
      
      if(isSamePerson) {
        const userFirstName = userGithub.name.split(' ')[0];
        setSpeechText(`Identidade confirmada! Seja bem vindo ao aluraverso, ${userFirstName}!`);
        
        await setUserLogged(userLogin);
        setTimeout(() => router.push("/chat"), 3000); 
        return
      }

      setSpeechText('Acesso negado, você não é o usuário informado!')

      setUserLogin('')
      setCheckUser(false)
    }, 1000);

    setTimeout(() => {
      clearInterval(time)
      setUserLogin('')
      setCheckUser(false)
      // setSpeechText('É necessário que permita o uso da câmera para realizar o reconhecimento facial!')
    }, 30000);
  }, [userGithub, webcamRef, userLogin]);
  useEffect(()=> checkUser && faceRecognition(), [checkUser]);


  return (
    <Container>
      <Speech text={speechText} />

      <Wrapper 
        width="100%"
        borderRadius={['50%']}
        aspectRatio={1}
        margin={["auto"]}
        justifyContent="center"
        alignItems="center"
        bgColor="neutrals"
        opacity={0.25}
        style={{aspectRatio: 1}}
      >
        {checkUser 
          ? (
            <Webcam 
              width="140%"
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

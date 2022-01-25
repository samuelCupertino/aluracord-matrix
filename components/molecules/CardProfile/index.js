import { useState, useCallback, useEffect, useMemo } from "react";
import { Text, Image } from "../../atoms";
import { Container } from "./styles";

export const CardProfile = ({ userName }) => {
  const userDefault = useMemo(() => ({
    name: "Usuário não encontrado", 
    image: "https://play-lh.googleusercontent.com/PCpXdqvUWfCW1mXhH1Y_98yBpgsWxuTSTofy3NGMo9yBTATDyzVkqU580bfSln50bFU"
  }), [])
  const [user, setUser] = useState(userDefault);
  const [timeSearch, setTimeSearch] = useState(null);

  const getUserData = useCallback(async (name) => {
    const userRes = await fetch(`https://api.github.com/users/${name}`);

    console.log(userRes);
    if (!userRes.ok) return userDefault
  
    const userData = await userRes.json();

    const newUser = {
      name: userData.name,
      image: userData.avatar_url,
    };
    
    return newUser;
  }, []);

  const searchData = useCallback(() => {
    clearTimeout(timeSearch);

    const time = setTimeout(async () => {
      const useData = await getUserData(userName)
      setUser(useData);
    }, 750);

    setTimeSearch(time);
  }, [timeSearch, userName]);

  useEffect(searchData, [userName]);

  return (
    <Container>
      <Image src={user.image} alt={`Foto de ${user.name}`} />
      <Text margin={["auto"]} bgColor="neutrals">
        {user.name}
      </Text>
    </Container>
  );
};

import { useEffect } from "react";
import { useRouter } from "next/router";
import { userLogged } from "../services";

import { Chat } from "../components/templates/Chat";

export default () => {
  const router = useRouter();
  const { getUserLogged } = userLogged();

  useEffect(() => {
    const user = getUserLogged();
    if(!user) router.back()
  }, []);

  return <Chat />
};

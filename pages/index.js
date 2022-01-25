import { useRouter } from "next/router";
import { SpaceBackground } from "../components/atoms";
import { Login } from "../components/templates/Login";

export default function PaginaInicial() {
  const username = "samuelCupertino";
  const router = useRouter();

  return (
    <>
      <Login />
    </>
  );
}

import { useRouter } from "next/router";
import { Login } from "../components/templates/Login";

export default function PaginaInicial() {
  const router = useRouter();

  return (
    <>
      <Login />
    </>
  );
}

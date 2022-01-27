import { Container } from "./styles";

export const MainChat = () => {
  return (
    <Container>
      <div className="historic">
        <div className="message">ola mundo</div>
        <div className="message">tudo bem?</div>
        <div className="message user">tudo bem?</div>
      </div>
      <div className="input">
        <input type="text" placeholder="Digite sua mensagem" />
        <button></button>
      </div>
    </Container>
  );
};

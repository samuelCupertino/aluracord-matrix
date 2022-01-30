import { useState, useEffect } from "react";
import { Container } from "./styles";

export const Speech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const msg = new SpeechSynthesisUtterance()
    const voices = window.speechSynthesis.getVoices()
    const voice = voices.find(voice => voice.lang === 'pt-BR')
    
    msg.onstart = () => setIsSpeaking(true)
    msg.onend = () => setIsSpeaking(false)
    msg.voice = voice
    msg.text = text
    
    speechSynthesis.speak(msg)
  }, [text])

  return (
    <Container isSpeaking={isSpeaking}>
      <div className="multi-spinner">
        <div className="multi-spinner">
          <div className="multi-spinner">
            <div className="multi-spinner">
              <div className="multi-spinner">
                <div className="multi-spinner"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

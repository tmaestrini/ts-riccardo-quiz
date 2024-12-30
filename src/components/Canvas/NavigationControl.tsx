import React from "react";
import { Button } from "@fluentui/react-components"
import { ChevronLeftRegular, ChevronRightRegular, TableCursorRegular } from '@fluentui/react-icons';
import { AppContext } from "../../context/AppContext";

import audioSource from '../../assets/background-music-224633.mp3';
import { useNavigate } from "react-router-dom";

type QuestionControlProps = {
  showCorrectAnswer: (value: boolean) => void;
}

export const NavigationControl: React.FC<QuestionControlProps> = (props) => {
  const navigate = useNavigate();
  const audio = new Audio(audioSource);

  const context = React.useContext(AppContext);
  const { totalQuestions, currentQuestionIndex, setQuestion } = context;

  function setNextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
      props.showCorrectAnswer(false);
      setQuestion(currentQuestionIndex + 1);
    }
  }

  function setPreviousQuestion() {
    if (currentQuestionIndex > 1) {
      props.showCorrectAnswer(false);
      setQuestion(currentQuestionIndex - 1);
    }
  }

  function showCorrectAnswer() {
    props.showCorrectAnswer(true);
    audio.play();
  }

  return (
    <>
      <div className="navigationControl" style={{padding: '0rem'}}>
        <Button onClick={setPreviousQuestion} icon={<ChevronLeftRegular />}>Vorherige Frage</Button>
        <Button appearance='primary' onClick={showCorrectAnswer}>Korrekte Antwort anzeigen</Button>
        <Button onClick={setNextQuestion} icon={<ChevronRightRegular />} iconPosition="after">Nächste Frage</Button>
      </div>
      <div className="navigationControl">
        <Button appearance='primary' onClick={()=> navigate("/score")} icon={<TableCursorRegular/>} iconPosition="before">Scoreboard anzeigen</Button>
      </div>
    </>
  )

}          
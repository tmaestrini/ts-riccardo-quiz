import { Button } from "@fluentui/react-components"
import React from "react";
import { AppContext } from "../../context/AppContext";

import audioSource from '../../assets/background-music-224633.mp3';

type NavigationButtonProps = {
  showCorrectAnswer: (value: boolean) => void;
}

export const NavigationButtons: React.FC<NavigationButtonProps> = (props) => {
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
      <Button onClick={setPreviousQuestion}>Vorherige Frage</Button>
      <Button onClick={setNextQuestion}>Nächste Frage</Button>
      <Button appearance='primary' onClick={showCorrectAnswer}>Auflösen</Button>
    </>
  )

}          
import { createContext, ReactNode } from "react";
import { Question } from "../types/Question";
import LoadQuestionsHook from "../hooks/LoadQuestionHook";
import React from "react";
import { Contestant } from "../types/Contestant";
import ScoreboardHook from "../hooks/ScoreboardHook";

type AppContextType = {
  totalQuestions: number;
  currentQuestion?: Question;
  currentQuestionIndex: number;
  setQuestion: (index: number) => void;

  scoreBoard?: Contestant[];
  addPoint: (player: Contestant) => void;
}


export const AppContext = createContext<AppContextType>({
  totalQuestions: 0,
  currentQuestionIndex: 1,
  setQuestion: () => { },

  scoreBoard: [],
  addPoint: (player) => player.points
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const { questions } = LoadQuestionsHook(0);
  const [currentQuestionIndex, setQuestionIndex] = React.useState(1);
  const {scoreBoard, addPoint} = ScoreboardHook();

  return <AppContext.Provider value={{
    totalQuestions: questions.length,
    currentQuestion: questions[currentQuestionIndex],
    currentQuestionIndex: currentQuestionIndex,
    setQuestion: setQuestionIndex,

    scoreBoard: scoreBoard,
    addPoint: (player: Contestant) => addPoint(player),
  }}>
    {children}
  </AppContext.Provider>;
};

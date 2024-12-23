import { createContext, ReactNode } from "react";
import { Question } from "../types/Question";
import LoadQuestionsHook from "../hooks/LoadQuestionHook";
import React from "react";

type AppContextType = {
  totalQuestions: number;
  currentQuestion?: Question;
  currentQuestionIndex: number;
  setQuestion: (index: number) => void;
}


export const AppContext = createContext<AppContextType>({
  totalQuestions: 0,
  currentQuestionIndex: 1,
  setQuestion: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const {questions} = LoadQuestionsHook(0);
  const [currentQuestionIndex, setQuestionIndex] = React.useState(1);

  return <AppContext.Provider value={{
    totalQuestions: questions.length,
    currentQuestion: questions[currentQuestionIndex],
    currentQuestionIndex: currentQuestionIndex,
    setQuestion: setQuestionIndex,
  }}>
    {children}
  </AppContext.Provider>;
};

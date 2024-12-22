import { createContext, ReactNode } from "react";
import { Question } from "../types/Question";
import LoadQuestionsHook from "../hooks/LoadQuestionHook";

type AppContextType = {
  questions: Question[];
}


export const AppContext = createContext<AppContextType>({
  questions: [],
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const {questions} = LoadQuestionsHook(0);

  return <AppContext.Provider value={{
    questions: questions,
  }}>
    {children}
  </AppContext.Provider>;
};

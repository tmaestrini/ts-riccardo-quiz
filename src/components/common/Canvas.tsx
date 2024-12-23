import { FluentProvider, webLightTheme, Card, Button, CardHeader, Text } from '@fluentui/react-components';
import React from 'react';
import { AppContext } from '../../context/AppContext';
import { CheckmarkCircleFilled } from '@fluentui/react-icons';
import { tokens } from '@fluentui/react-components';

export const Canvas: React.FC = () => {
  const context = React.useContext(AppContext);
  const { totalQuestions, currentQuestion, currentQuestionIndex, setQuestion } = context;
  const [correctAnswer, setCorrectAnswer] = React.useState(false);
  console.log(currentQuestion);
  function setNextQuestion() {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCorrectAnswer(false);
      setQuestion(currentQuestionIndex + 1);
    }
  }

  function setPreviousQuestion() {
    if (currentQuestionIndex > 1) {
      setCorrectAnswer(false);
      setQuestion(currentQuestionIndex - 1);
    }
  }

  function showCorrectAnswer() {
    setCorrectAnswer(true);
  }

  function isCorrectAnswer(answer: string): boolean {
    return currentQuestion?.correctAnswer === answer
  }

  const CorrectAnswerIcon = (): JSX.Element => {
    return <CheckmarkCircleFilled color={tokens.colorPaletteLightGreenForeground1} />
  }

  return (
    <FluentProvider theme={webLightTheme}>
      {currentQuestion &&
        <div className="flex w-full flex-col">
          <div className="w-full">
            <Card>
              <CardHeader header={
                <h2>{currentQuestion.number} {currentQuestion.question}</h2>
              } />
            </Card>
          </div>
          <div className="flex w-full gap-4">
            {currentQuestion.answers.map((answer, index) => {
              return (
                <Card key={index} className="flex-1">
                  <Text className="w-full">
                    <div>{index + 1}
                      {correctAnswer && isCorrectAnswer(answer) && <CorrectAnswerIcon />}
                    </div>
                    {answer ?? `Antwort ${index + 1} nicht vorhanden`}
                  </Text>
                </Card>
              )
            }
            )}
          </div>
          <Button onClick={setPreviousQuestion}>Vorherige Frage</Button>
          <Button onClick={setNextQuestion}>Nächste Frage</Button>
          <Button appearance='primary' onClick={showCorrectAnswer}>Auflösen</Button>

        </div>
      }
    </FluentProvider>
  );
};
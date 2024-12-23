import { FluentProvider, Card, CardHeader, Text, webDarkTheme } from '@fluentui/react-components';
import React from 'react';
import { AppContext } from '../../context/AppContext';

import { NavigationButtons } from './NavigationButtons';
import { Answer } from '../Question/Answer';

export const Canvas: React.FC = () => {
  const context = React.useContext(AppContext);
  const { currentQuestion, currentQuestionIndex } = context;
  const [correctAnswer, showCorrectAnswer] = React.useState(false);

  function isCorrectAnswer(answer: string): boolean {
    return currentQuestion?.correctAnswer === answer
  }

  return (
    <FluentProvider theme={webDarkTheme} style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>

      {currentQuestion &&
        <div>
          <div className="w-full">
            <Card>
              <CardHeader header={
                <div style={{ width: '100%', textAlign: 'center', margin: '10px auto' }}>
                  <Text weight='bold' size={900}>({currentQuestion.number}) {currentQuestion.question}</Text>
                </div>
              } />
            </Card>
          </div>

          <div className='questionBlock'>
            {currentQuestion.answers.map((answer, index) => (
              <Answer
                currentQuestionIndex={currentQuestionIndex}
                index={index}
                answer={answer}
                correctAnswer={correctAnswer}
                isCorrectAnswer={isCorrectAnswer(answer)}
                key={`${currentQuestionIndex}-${index}`} />
            ))}
          </div>

          <NavigationButtons showCorrectAnswer={showCorrectAnswer} />
        </div>
      }
    </FluentProvider>
  );
};
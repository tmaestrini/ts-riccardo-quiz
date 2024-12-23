import { FluentProvider, webDarkTheme } from '@fluentui/react-components';
import React from 'react';
import { AppContext } from '../../context/AppContext';
import { AnswerBlock } from '../Question/Answer';
import { NavigationButtons } from './NavigationButtons';
import { QuestionBlock } from '../Question/Question';

export const Canvas: React.FC = () => {
  const context = React.useContext(AppContext);
  const { currentQuestion, currentQuestionIndex } = context;
  const [correctAnswer, showCorrectAnswer] = React.useState(false);

  function isCorrectAnswer(answer: string): boolean {
    return currentQuestion?.correctAnswer === answer
  }


  return (
    <FluentProvider theme={webDarkTheme} style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
      <div>
        <QuestionBlock currentQuestion={currentQuestion} />
        
        <div className='answerBlock'>
          {currentQuestion?.answers.map((answer, index) => (
            <AnswerBlock
              currentQuestionIndex={currentQuestionIndex}
              index={index}
              answer={answer}
              showCorrectAnswer={correctAnswer}
              isCorrectAnswer={isCorrectAnswer(answer)}
              key={`${currentQuestionIndex}-${index}`} />
          ))}
        </div>

        <NavigationButtons showCorrectAnswer={showCorrectAnswer} />
      </div>
    </FluentProvider>
  );
};
import { FluentProvider, Card, CardHeader, Text, webDarkTheme } from '@fluentui/react-components';
import React from 'react';
import { AppContext } from '../../context/AppContext';
import { CheckmarkCircleFilled } from '@fluentui/react-icons';
import { tokens } from '@fluentui/react-components';

import { NavigationButtons } from './NavigationButtons';

export const Canvas: React.FC = () => {
  const context = React.useContext(AppContext);
  const { currentQuestion, currentQuestionIndex } = context;
  const [correctAnswer, showCorrectAnswer] = React.useState(false);

  function isCorrectAnswer(answer: string): boolean {
    return currentQuestion?.correctAnswer === answer
  }

  const CorrectAnswerIcon = (): JSX.Element => {
    return <CheckmarkCircleFilled fontSize={100} style={{ verticalAlign: 'baseline' }} color={tokens.colorPaletteLightGreenForeground1} />
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
              <Card
                style={{
                  width: '100%',
                  minHeight: '150px',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                key={`${currentQuestionIndex}-${index}`}
                orientation='vertical'
                className={correctAnswer && isCorrectAnswer(answer) ? 'blinkingCard' : 'card-animate'}>
                <CardHeader
                  header={
                    <div style={{ width: '100%', textAlign: 'center' }}>
                      <Text weight="bold" size={1000}>{index + 1}</Text>
                    </div>
                  }
                />
                <div className='question'>
                  <div style={{ margin: '10px auto' }}>
                    <Text weight="semibold" size={800}>
                      {answer ?? `Antwort ${index + 1} nicht vorhanden`}
                    </Text>
                  </div>
                  {correctAnswer && isCorrectAnswer(answer) && <CorrectAnswerIcon />}
                </div>
              </Card>
            ))}
          </div>

          <NavigationButtons showCorrectAnswer={showCorrectAnswer} />
        </div>
      }
    </FluentProvider>
  );
};
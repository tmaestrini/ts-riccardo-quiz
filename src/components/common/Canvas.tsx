import { FluentProvider, Card, Button, CardHeader, Text, webDarkTheme } from '@fluentui/react-components';
import React from 'react';
import { AppContext } from '../../context/AppContext';
import { CheckmarkCircleFilled } from '@fluentui/react-icons';
import { tokens } from '@fluentui/react-components';

// import audioSource from '../../assets/mixkit-trumpet-fanfare-2293.wav';
import audioSource from '../../assets/background-music-224633.mp3';

export const Canvas: React.FC = () => {
  const audio = new Audio(audioSource);

  const context = React.useContext(AppContext);
  const { totalQuestions, currentQuestion, currentQuestionIndex, setQuestion } = context;
  const [correctAnswer, setCorrectAnswer] = React.useState(false);

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
    audio.play();
  }

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
          </div>          <Button onClick={setPreviousQuestion}>Vorherige Frage</Button>
          <Button onClick={setNextQuestion}>Nächste Frage</Button>
          <Button appearance='primary' onClick={showCorrectAnswer}>Auflösen</Button>

        </div>
      }
    </FluentProvider>
  );
};
import { Card, CardHeader, Text } from "@fluentui/react-components"
import { CheckmarkCircleFilled } from '@fluentui/react-icons';
import { tokens } from '@fluentui/react-components';


type AnswerBlockProps = {
  currentQuestionIndex: number;
  index: number;
  answer: string;
  showCorrectAnswer?: boolean;
  isCorrectAnswer: boolean;
}

export const AnswerBlock: React.FC<AnswerBlockProps> = (props) => {
  const { currentQuestionIndex, index, answer, showCorrectAnswer, isCorrectAnswer } = props;

  const CorrectAnswerIcon = (): JSX.Element => {
    return <CheckmarkCircleFilled fontSize={100} style={{ verticalAlign: 'baseline' }} color={tokens.colorPaletteLightGreenForeground1} />
  }

  return (<Card
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
    className={showCorrectAnswer && isCorrectAnswer ? 'blinkingCard' : 'card-animate'}>
    <CardHeader
      header={
        <div style={{ width: '100%', textAlign: 'center' }}>
          <Text weight="bold" size={1000}>{index + 1}</Text>
        </div>
      }
    />
    <div className='answer'>
      <div style={{ margin: '10px auto' }}>
        <Text weight="semibold" size={800}>
          {answer ?? `Antwort ${index + 1} nicht vorhanden`}
        </Text>
      </div>
      {showCorrectAnswer && isCorrectAnswer && <CorrectAnswerIcon />}
    </div>
  </Card>)
}

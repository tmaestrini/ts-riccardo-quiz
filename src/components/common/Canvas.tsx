import { FluentProvider, webLightTheme, Card, Button, CardHeader } from '@fluentui/react-components';
import React from 'react';
import { AppContext } from '../../context/AppContext';

export const Canvas: React.FC = () => {
  const context = React.useContext(AppContext);
  const {questions} = context
  const [currentQuestionIndex] = React.useState(1);

  return (
    <FluentProvider theme={webLightTheme}>
      {questions && questions[currentQuestionIndex] &&
        <div className="flex w-full flex-col">
          <div className="w-full">
            <Card>
              <CardHeader header={
                <h2>{questions[currentQuestionIndex].question}</h2>
              } />
            </Card>
          </div>
          <div className="flex w-full gap-4">
            <Card className="flex-1">
              <Button appearance="primary" className="w-full">
                Eins
              </Button>
            </Card>
            <Card className="flex-1">
              <Button appearance="primary" className="w-full">
                Zwei
              </Button>
            </Card>
            <Card className="flex-1">
              <Button appearance="primary" className="w-full">
                Drei
              </Button>
            </Card>
          </div>
        </div>
      }
    </FluentProvider>
  );
};
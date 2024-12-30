import { Card, CardHeader, Text } from "@fluentui/react-components";
import React from "react";
import { Question } from "../../types/Question";

type QuestionBlockProps = {
  currentQuestion?: Question;
}

export const QuestionBlock: React.FC<QuestionBlockProps> = (props) => {
  const { currentQuestion } = props;

  return (
    <div className="w-full">
      <Card>
        <CardHeader header={
          <div style={{ margin: '10px auto' }}>
            {currentQuestion ?
              <Text weight='bold' size={900}>({currentQuestion?.number}) {currentQuestion?.question}</Text> :
              <Text weight='bold' size={600}>— Keine Fragen geladen —</Text>
            }
          </div>
        } />
      </Card>
    </div>
  );
}
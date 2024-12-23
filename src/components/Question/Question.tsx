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
          <div style={{ width: '100%', textAlign: 'center', margin: '10px auto' }}>
            <Text weight='bold' size={900}>({currentQuestion?.number}) {currentQuestion?.question}</Text>
          </div>
        } />
      </Card>
    </div>
  );
}
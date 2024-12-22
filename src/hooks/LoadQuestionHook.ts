
import { useMemo, useState } from 'react';
import { Question } from '../types/Question';

export default function LoadQuestionsHook(startQuestionByNumber: number) {
  const [questions, setQuestions] = useState<Question[]>([]);

  useMemo(() => {
    async function fetchData() {
      const questions = await fetch('../questions/questions.csv');
      const csvText = await questions.text();
      const rows = csvText.split('\n').filter(row => row.trim());
      const parsedQuestions: Question[] = rows.map(row => {
        const [number, level, question, answer1, answer2, answer3, correctAnswer] = row.split(';');
        return {
          number: parseInt(number.trim()),
          level: level.trim(),
          question: question.trim(),
          answers: [
            answer1.trim(),
            answer2.trim(),
            answer3.trim()
          ],
          correctAnswer: parseInt(correctAnswer.trim())
        } as Question;
      });
      const filteredQuestions = startQuestionByNumber ? parsedQuestions.filter(question => question.number >= startQuestionByNumber) : parsedQuestions;
      setQuestions(filteredQuestions);
    }

    fetchData();
  }, [startQuestionByNumber]);

  return {
    questions
  };
}
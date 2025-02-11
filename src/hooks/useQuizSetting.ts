import { useState } from 'react';
import type { QuizSetting } from '../type';

export const useQuizSetting = () => {
  const [quizSetting, setQuizSetting] = useState<QuizSetting>({
    type: 'NoteQuiz',
    answerOptions: 'only-c-maj',
    targetString: [6],
    totalCount: 10,
  });
  const isValidSetting = quizSetting.targetString.length > 0;

  const handleChangeSetting = (newValue: QuizSetting) => {
    setQuizSetting(newValue);
  };

  return {
    quizSetting,
    isValidSetting,
    handleChangeSetting,
  };
};

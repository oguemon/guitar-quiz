import { FC } from 'react';
import { useQuiz } from '../../hooks/useQuiz';
import { useQuizSetting } from '../../hooks/useQuizSetting';
import { AnswerPanel } from './AnswerPanel/AnswerPanel';
import { QuestionPanel } from './QuestionPanel/QuestionPanel';
import styles from './QuizSection.module.css';
import { ResultPanel } from './ResultPanel/ResultPanel';
import { SettingPanel } from './SettingPanel/SettingPanel';

export const QuizSection: FC = () => {
  const { quizSetting, isValidSetting, handleChangeSetting } = useQuizSetting();
  const {
    currentStatus,
    totalCount,
    question,
    selectedAnswer,
    history,
    isOpenResultDialog,
    seconds,
    handleClickStartButton,
    handleAnswer,
    handleClickNextButton,
    handleClickViewResultButton,
    handleClickReturnButton,
  } = useQuiz(quizSetting);

  if (currentStatus === 'standby') {
    return (
      <div className={styles.module}>
        <SettingPanel
          setting={quizSetting}
          isValidSetting={isValidSetting}
          onChangeSetting={handleChangeSetting}
          onClickStartButton={handleClickStartButton}
        />
      </div>
    );
  }

  if (currentStatus === 'view-result') {
    return (
      <div className={styles.module}>
        <ResultPanel
          history={history}
          totalCount={totalCount}
          seconds={seconds}
          onClickReturnButton={handleClickReturnButton}
        />
      </div>
    );
  }

  if (question === undefined) {
    return null;
  }

  return (
    <div className={styles.module}>
      <QuestionPanel
        totalCount={totalCount}
        quiz={question}
        hasAnswered={currentStatus === 'check-answer'}
        seconds={seconds}
        onAnswer={handleAnswer}
      />
      {currentStatus === 'check-answer' && (
        <AnswerPanel
          isOpenResultDialog={isOpenResultDialog}
          isFinalAnswer={question.count < totalCount}
          selectedAnswer={selectedAnswer}
          correctAnswer={question.answer}
          onClickNextButton={handleClickNextButton}
          onClickViewResultButton={handleClickViewResultButton}
          onClickReturnButton={handleClickReturnButton}
        />
      )}
    </div>
  );
};

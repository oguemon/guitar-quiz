import { FC } from 'react';
import { useQuiz } from '../../hooks/useQuiz';
import { useQuizSetting } from '../../hooks/useQuizSetting';
import { AnswerPanel } from './AnswerPanel/AnswerPanel';
import { Hero } from './Hero/Hero';
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
      <Hero>
        <SettingPanel
          setting={quizSetting}
          isValidSetting={isValidSetting}
          onChangeSetting={handleChangeSetting}
          onClickStartButton={handleClickStartButton}
        />
      </Hero>
    );
  }

  if (currentStatus === 'view-result') {
    return (
      <div className={styles.wrapper}>
        <div className={styles.panelContainer}>
          <ResultPanel
            setting={quizSetting}
            history={history}
            totalCount={totalCount}
            seconds={seconds}
            onClickRetryButton={handleClickStartButton}
            onClickReturnButton={handleClickReturnButton}
          />
        </div>
      </div>
    );
  }

  if (question === undefined) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.panelContainer}>
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
    </div>
  );
};

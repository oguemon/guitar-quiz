import { FC } from 'react';
import { useQuiz } from '../../hooks/useQuiz';
import { useQuizSetting } from '../../hooks/useQuizSetting';
import { AnswerPanel } from './AnswerPanel/AnswerPanel';
import { NormalButton } from './NormalButton/NormalButton';
import { PrimaryButton } from './PrimaryButton/PrimaryButton';
import { QuestionPanel } from './QuestionPanel/QuestionPanel';
import styles from './QuizSection.module.css';
import { ResultPanel } from './ResultPanel/ResultPanel';
import { SelectAnswerPanel } from './SelectAnswerPanel/SelectAnswerPanel';
import { SettingPanel } from './SettingPanel/SettingPanel';

export const QuizSection: FC = () => {
  const { quizSetting, isValidSetting, handleChangeSetting } = useQuizSetting();
  const {
    currentStatus,
    totalCount,
    question,
    selectedAnswer,
    history,
    handleClickStartButton,
    handleAnswer,
    handleClickNextButton,
    handleClickViewResultButton,
    handleClickReturnButton,
  } = useQuiz(quizSetting);

  if (currentStatus === 'standby') {
    return (
      <div className={styles.module}>
        <p>これからクイズを開始します。</p>
        <SettingPanel setting={quizSetting} onChange={handleChangeSetting} />
        <div className={styles.buttonContainer}>
          <PrimaryButton
            label="出題開始"
            onClick={() => handleClickStartButton()}
            disabled={!isValidSetting}
          />
        </div>
      </div>
    );
  }

  if (currentStatus === 'view-result') {
    return (
      <div className={styles.module}>
        <ResultPanel history={history} totalCount={totalCount} />
        <div className={styles.buttonContainer}>
          <PrimaryButton
            label="最初に戻る"
            onClick={() => handleClickReturnButton()}
          />
        </div>
      </div>
    );
  }

  if (question === undefined) {
    return null;
  }

  return (
    <div className={styles.module}>
      <QuestionPanel totalCount={totalCount} quiz={question} />
      <SelectAnswerPanel
        answerOptions={question.answerOptions}
        onAnswer={handleAnswer}
      />
      {currentStatus === 'check-answer' && (
        <AnswerPanel
          selectedAnswer={selectedAnswer}
          correctAnswer={question.answer}
        />
      )}
      {currentStatus === 'check-answer' && (
        <div className={styles.buttonContainer}>
          {question.count < totalCount ? (
            <PrimaryButton
              label="次の問題"
              onClick={() => handleClickNextButton()}
            />
          ) : (
            <PrimaryButton
              label="結果を見る"
              onClick={() => handleClickViewResultButton()}
            />
          )}
          <NormalButton
            label="最初に戻る"
            onClick={() => handleClickReturnButton()}
          />
        </div>
      )}
    </div>
  );
};

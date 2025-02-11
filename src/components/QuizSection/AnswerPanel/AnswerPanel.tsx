import { FC } from 'react';
import { ResultDialog } from '../ResultDialog/ResultDialog';
import styles from './AnswerPanel.module.css';

type Props = {
  isOpenResultDialog: boolean;
  selectedAnswer: string;
  correctAnswer: string;
};

export const AnswerPanel: FC<Props> = ({
  isOpenResultDialog,
  selectedAnswer,
  correctAnswer,
}) => {
  const isCorrect = selectedAnswer === correctAnswer;
  return (
    <div className={styles.module}>
      <div className={styles.result}>
        {isCorrect ? (
          <strong className={styles.correct}>✅ 正解</strong>
        ) : (
          <strong className={styles.notCorrect}>❌ 不正解</strong>
        )}
      </div>
      <div className={styles.checkAnswer}>
        {!isCorrect && (
          <div>
            選択した解答：<strong>{selectedAnswer}</strong>
          </div>
        )}
        <div>
          正解：<strong>{correctAnswer}</strong>
        </div>
      </div>
      <ResultDialog isOpen={isOpenResultDialog} isCorrect={isCorrect} />
    </div>
  );
};

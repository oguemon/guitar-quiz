import { FC } from 'react';
import type { Quiz } from '../../../type';
import { AnswerButton } from './AnswerButton/AnswerButton';
import { CountBadge } from './CountBadge/CountBadge';
import styles from './QuestionPanel.module.css';

type Props = {
  quiz: Quiz;
  totalCount: number;
  hasAnswered: boolean;
  onAnswer: (selectedOption: string) => void;
};

export const QuestionPanel: FC<Props> = ({
  quiz,
  totalCount,
  hasAnswered,
  onAnswer,
}) => {
  if (quiz.type === 'NoteQuiz') {
    return (
      <div className={styles.module}>
        <div className={styles.quiz}>
          <CountBadge currentCount={quiz.count} totalCount={totalCount} />
          <h2 className={styles.title}>次の位置にある音名は何？</h2>
          <p>
            <strong className={styles.emphasis}>{quiz.stringPosition}</strong>
            弦の
            <strong className={styles.emphasis}>{quiz.flatPosition}</strong>
            フラット
          </p>
        </div>
        {!hasAnswered && (
          <div className={styles.answer}>
            <h3 className={styles.answerLabel}>次の中から選択してください。</h3>
            <div className={styles.answerButtonContainer}>
              {quiz.answerOptions.map((value) => (
                <AnswerButton
                  key={value}
                  label={value}
                  onClick={() => onAnswer(value)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
  return <div className={styles.module}>問題種別不明</div>;
};

import { FC } from 'react';
import type { Quiz } from '../../../type';
import { CountBadge } from './CountBadge/CountBadge';
import styles from './QuestionPanel.module.css';

type Props = {
  quiz: Quiz;
  totalCount: number;
};

export const QuestionPanel: FC<Props> = ({ quiz, totalCount }) => {
  if (quiz.type === 'NoteQuiz') {
    return (
      <div className={styles.module}>
        <CountBadge currentCount={quiz.count} totalCount={totalCount} />
        <h2 className={styles.title}>次の位置にある音名は何？</h2>
        <p>
          <strong className={styles.emphasis}>{quiz.stringPosition}</strong>弦の
          <strong className={styles.emphasis}>{quiz.flatPosition}</strong>
          フラット
        </p>
      </div>
    );
  }
  return <div className={styles.module}>問題種別不明</div>;
};

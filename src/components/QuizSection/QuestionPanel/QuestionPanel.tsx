import { FC } from 'react';
import type { Quiz } from '../../../type';
import styles from './QuestionPanel.module.css';

type Props = {
  quiz: Quiz;
  totalCount: number;
};

export const QuestionPanel: FC<Props> = ({ quiz, totalCount }) => {
  if (quiz.type === 'NoteQuiz') {
    return (
      <div className={styles.module}>
        <div className={styles.count}>
          {quiz.count}問目／全{totalCount}問
        </div>
        <h2 className={styles.title}>次の位置にある音名を答えよ</h2>
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

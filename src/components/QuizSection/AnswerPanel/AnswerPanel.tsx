import { FC } from 'react';
import styles from './AnswerPanel.module.css';

type Props = {
  selectedAnswer: string;
  correctAnswer: string;
};

export const AnswerPanel: FC<Props> = ({ selectedAnswer, correctAnswer }) => {
  const isCorrect = selectedAnswer === correctAnswer;
  return (
    <div className={styles.module}>
      <p>
        {isCorrect ? <strong>正解！！！</strong> : <strong>不正解…</strong>}
      </p>
      <ul>
        <li>
          選択した解答：<strong>{selectedAnswer}</strong>
        </li>
        <li>
          正解：<strong>{correctAnswer}</strong>
        </li>
      </ul>
    </div>
  );
};

import { FC } from 'react';
import styles from './ResultPanel.module.css';

type Props = {
  history: boolean[];
  totalCount: number;
};

export const ResultPanel: FC<Props> = ({ history, totalCount }) => {
  const correctCount = history.filter((isCorrect) => isCorrect).length;
  const correctRate = Math.floor((correctCount / totalCount) * 100);
  return (
    <div className={styles.module}>
      <h2>お疲れ様でした！</h2>
      <ul>
        <li>
          正解率：<span>{correctRate}</span>%
        </li>
        <li>
          <span>{totalCount}</span>問中
          <span>{correctCount}</span>問正解
        </li>
      </ul>
      <ul>
        {history.map((correct, index) => (
          <li>
            第{index + 1}問：{correct ? '⭕️' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
};

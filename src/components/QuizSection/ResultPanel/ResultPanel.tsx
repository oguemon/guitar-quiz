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
      <h2 className={styles.title}>結果発表</h2>
      <p className={styles.message}>お疲れ様でした！</p>
      <div>
        <div className={styles.resultItem}>
          <div className={styles.label}>正解率</div>
          <div>
            <span className={styles.resultValue}>{correctRate}</span>%
          </div>
        </div>
        <div className={styles.resultItem}>
          <div className={styles.label}>正解数</div>
          <div>
            <span className={styles.resultValue}>{correctCount}</span>
            問正解／全{totalCount}問
          </div>
        </div>
      </div>
      <div>
        <table>
          <tr className={styles.detailTableLine}>
            <th className={styles.detailTableHeaderCell}>問題</th>
            <th className={styles.detailTableHeaderCell}>正誤</th>
          </tr>
          {history.map((correct, index) => (
            <tr className={styles.detailTableLine}>
              <td className={styles.detailTableBodyCell}>第{index + 1}問</td>
              <td className={styles.detailTableBodyCell}>
                {correct ? '⭕️' : '❌'}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

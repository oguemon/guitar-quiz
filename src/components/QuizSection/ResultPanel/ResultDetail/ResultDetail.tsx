import { FC } from 'react';
import styles from './ResultDetail.module.css';

type Props = {
  history: boolean[];
};

export const ResultDetail: FC<Props> = ({ history }) => {
  return (
    <div>
      <details className={styles.container}>
        <summary className={styles.summary}>問題別の内訳</summary>
        <div className={styles.panel}>
          <table>
            <thead>
              <tr className={styles.tableLine}>
                <th className={styles.tableHeaderCell}>問題</th>
                <th className={styles.tableHeaderCell}>正誤</th>
              </tr>
            </thead>
            <tbody>
              {history.map((correct, index) => (
                <tr className={styles.tableLine}>
                  <td className={styles.tableBodyCell}>第{index + 1}問</td>
                  <td className={styles.tableBodyCell}>
                    {correct ? '⭕️' : '❌'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
};

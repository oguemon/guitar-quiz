import { FC } from 'react';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import styles from './ResultPanel.module.css';

type Props = {
  history: boolean[];
  totalCount: number;
  seconds: number;
  onClickReturnButton: () => void;
};

export const ResultPanel: FC<Props> = ({
  history,
  totalCount,
  seconds,
  onClickReturnButton,
}) => {
  const correctCount = history.filter((isCorrect) => isCorrect).length;
  const correctRate = Math.floor((correctCount / totalCount) * 100);
  const answerMinutes = Math.floor(seconds / 60);
  const answerSeconds = seconds % 60;
  const answerSecondsPerQuestion = seconds / totalCount;
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
        <div className={styles.resultItem}>
          <div className={styles.label}>所要時間</div>
          <div className={styles.timer}>
            <div>
              {answerMinutes > 0 && (
                <>
                  <span className={styles.resultValue}>{answerMinutes}</span>分
                </>
              )}
              <span className={styles.resultValue}>{answerSeconds}</span>秒
            </div>
            <div className={styles.secondsPerQuestion}>
              1問あたり{answerSecondsPerQuestion.toFixed(1)}秒
            </div>
          </div>
        </div>
      </div>
      <div>
        <table>
          <thead>
            <tr className={styles.detailTableLine}>
              <th className={styles.detailTableHeaderCell}>問題</th>
              <th className={styles.detailTableHeaderCell}>正誤</th>
            </tr>
          </thead>
          <tbody>
            {history.map((correct, index) => (
              <tr className={styles.detailTableLine}>
                <td className={styles.detailTableBodyCell}>第{index + 1}問</td>
                <td className={styles.detailTableBodyCell}>
                  {correct ? '⭕️' : '❌'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ButtonContainer>
        <PrimaryButton
          label="最初に戻る"
          onClick={() => onClickReturnButton()}
        />
      </ButtonContainer>
    </div>
  );
};

import { FC } from 'react';
import styles from './ResultSummary.module.css';

type Props = {
  correctCount: number;
  correctRate: number;
  totalCount: number;
  seconds: number;
};

export const ResultSummary: FC<Props> = ({
  correctCount,
  correctRate,
  totalCount,
  seconds,
}) => {
  const answerMinutes = Math.floor(seconds / 60);
  const answerSeconds = seconds % 60;
  const answerSecondsPerQuestion = seconds / totalCount;
  return (
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
  );
};

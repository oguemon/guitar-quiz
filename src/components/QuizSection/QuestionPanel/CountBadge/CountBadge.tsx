import { FC } from 'react';
import styles from './CountBadge.module.css';

type Props = {
  currentCount: number;
  totalCount: number;
};

export const CountBadge: FC<Props> = ({ currentCount, totalCount }) => {
  return (
    <div className={styles.module}>
      <div className={styles.currentCount}>{currentCount}問目</div>
      <div className={styles.totalCount}>全{totalCount}問</div>
    </div>
  );
};

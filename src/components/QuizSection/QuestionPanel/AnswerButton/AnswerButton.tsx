import { FC } from 'react';
import styles from './AnswerButton.module.css';

type Props = {
  label: string;
  onClick: () => void;
};

export const AnswerButton: FC<Props> = ({ label, onClick }) => {
  return (
    <button className={styles.module} type="button" onClick={() => onClick()}>
      {label}
    </button>
  );
};

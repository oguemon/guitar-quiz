import { FC } from 'react';
import styles from './NormalButton.module.css';

type Props = {
  label: string;
  onClick: () => void;
};

export const NormalButton: FC<Props> = ({ label, onClick }) => {
  return (
    <button className={styles.module} type="button" onClick={() => onClick()}>
      {label}
    </button>
  );
};

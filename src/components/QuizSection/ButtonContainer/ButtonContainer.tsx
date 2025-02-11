import { FC, ReactNode } from 'react';
import styles from './ButtonContainer.module.css';

type Props = {
  children: ReactNode;
};

export const ButtonContainer: FC<Props> = ({ children }) => {
  return <div className={styles.module}>{children}</div>;
};

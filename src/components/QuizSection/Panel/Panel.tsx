import { FC, ReactNode } from 'react';
import styles from './Panel.module.css';

type Props = {
  children: ReactNode;
};

export const Panel: FC<Props> = ({ children }) => {
  return <section className={styles.module}>{children}</section>;
};

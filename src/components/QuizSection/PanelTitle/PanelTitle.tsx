import { FC } from 'react';
import styles from './PanelTitle.module.css';

type Props = {
  title: string;
};

export const PanelTitle: FC<Props> = ({ title }) => {
  return <h2 className={styles.module}>{title}</h2>;
};

import type { FC, ReactNode } from 'react';
import styles from './SettingListItem.module.css';

type Props = {
  title: string;
  children: ReactNode;
};

export const SettingListItem: FC<Props> = ({ title, children }) => {
  return (
    <li className={styles.module}>
      <h3 className={styles.title}>{title}</h3>
      <div>{children}</div>
    </li>
  );
};

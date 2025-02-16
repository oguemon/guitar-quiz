import { FC, ReactNode } from 'react';
import HeroFg from '../../../assets/hero-fg.svg';
import styles from './Hero.module.css';

type Props = {
  children: ReactNode;
};

export const Hero: FC<Props> = ({ children }) => {
  return (
    <div className={styles.module}>
      <div className={styles.hero}>
        <div className={styles.wrapper}>
          <img
            src={HeroFg}
            className={styles.heroImage}
            alt="弦&フレットと音名の対応を効率的に暗記！ギター指板音名クイズくん"
          />
        </div>
      </div>
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
};

import { FC } from 'react';
import Logo from '../../assets/logo.svg';
import styles from './Header.module.css';

export const Header: FC = () => {
  return (
    <header className={styles.module}>
      <img className={styles.logo} src={Logo} alt="ギター指板→音名クイズくん" />
    </header>
  );
};

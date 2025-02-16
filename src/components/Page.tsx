import { FC } from 'react';
import '../styles/global.css';
import { AdUnit } from './AdUnit/AdUnit';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import styles from './Page.module.css';
import { QuizSection } from './QuizSection/QuizSection';

export const Page: FC = () => {
  return (
    <div className={styles.module}>
      <Header />
      <main className={styles.main}>
        <QuizSection />
        <AdUnit />
      </main>
      <Footer />
    </div>
  );
};

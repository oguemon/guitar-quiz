import * as Dialog from '@radix-ui/react-dialog';
import { FC } from 'react';
import styles from './ResultDialog.module.css';

type Props = {
  isOpen: boolean;
  isCorrect: boolean;
};

export const ResultDialog: FC<Props> = ({ isOpen, isCorrect }) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Title className={styles.title}>
          {isCorrect ? (
            <div className={styles.correct}>✅ 正解</div>
          ) : (
            <div className={styles.notCorrect}>❌ 不正解</div>
          )}
        </Dialog.Title>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

import { FC } from 'react';
import { AnswerButton } from '../AnswerButton/AnswerButton';
import styles from './SelectAnswerPanel.module.css';

type Props = {
  answerOptions: string[];
  onAnswer: (selectedOption: string) => void;
};

export const SelectAnswerPanel: FC<Props> = ({ answerOptions, onAnswer }) => {
  return (
    <div className={styles.module}>
      {answerOptions.map((value) => (
        <AnswerButton
          key={value}
          label={value}
          onClick={() => onAnswer(value)}
        />
      ))}
    </div>
  );
};

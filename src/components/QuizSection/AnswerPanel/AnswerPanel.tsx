import { FC } from 'react';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';
import { NormalButton } from '../NormalButton/NormalButton';
import { Panel } from '../Panel/Panel';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { ResultDialog } from '../ResultDialog/ResultDialog';
import styles from './AnswerPanel.module.css';

type Props = {
  isOpenResultDialog: boolean;
  isFinalAnswer: boolean;
  selectedAnswer: string;
  correctAnswer: string;
  onClickNextButton: () => void;
  onClickViewResultButton: () => void;
  onClickReturnButton: () => void;
};

export const AnswerPanel: FC<Props> = ({
  isOpenResultDialog,
  isFinalAnswer,
  selectedAnswer,
  correctAnswer,
  onClickNextButton,
  onClickViewResultButton,
  onClickReturnButton,
}) => {
  const isCorrect = selectedAnswer === correctAnswer;
  return (
    <Panel>
      <div className={styles.result}>
        {isCorrect ? (
          <strong className={styles.correct}>✅ 正解</strong>
        ) : (
          <strong className={styles.notCorrect}>❌ 不正解</strong>
        )}
      </div>
      <div className={styles.checkAnswer}>
        {!isCorrect && (
          <div>
            選択した解答：<strong>{selectedAnswer}</strong>
          </div>
        )}
        <div>
          正解：<strong>{correctAnswer}</strong>
        </div>
      </div>
      <ButtonContainer>
        {isFinalAnswer ? (
          <PrimaryButton label="次の問題" onClick={() => onClickNextButton()} />
        ) : (
          <PrimaryButton
            label="結果を見る"
            onClick={() => onClickViewResultButton()}
          />
        )}
        <NormalButton
          label="最初に戻る"
          onClick={() => onClickReturnButton()}
        />
      </ButtonContainer>
      <ResultDialog isOpen={isOpenResultDialog} isCorrect={isCorrect} />
    </Panel>
  );
};

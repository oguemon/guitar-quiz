import { FC } from 'react';
import type { Quiz } from '../../../type';
import { Panel } from '../Panel/Panel';
import { PanelTitle } from '../PanelTitle/PanelTitle';
import { AnswerButton } from './AnswerButton/AnswerButton';
import { CountBadge } from './CountBadge/CountBadge';
import styles from './QuestionPanel.module.css';
import { Timer } from './Timer/Timer';

type Props = {
  quiz: Quiz;
  totalCount: number;
  hasAnswered: boolean;
  seconds: number;
  onAnswer: (selectedOption: string) => void;
};

export const QuestionPanel: FC<Props> = ({
  quiz,
  totalCount,
  hasAnswered,
  seconds,
  onAnswer,
}) => {
  const quizTitle =
    quiz.type === 'NoteQuiz'
      ? '次の位置にある音名は何？'
      : '次の条件を満たすフレット位置はどこ？';

  const quizCondition =
    quiz.type === 'NoteQuiz' ? (
      <p>
        <strong className={styles.emphasis}>{quiz.stringPosition}</strong>
        弦の
        <strong className={styles.emphasis}>{quiz.fretPosition}</strong>
        フレット
      </p>
    ) : (
      <p>
        <strong className={styles.emphasis}>{quiz.stringPosition}</strong>
        弦で
        <strong className={styles.emphasis}>{quiz.note}</strong>
        の音が出る
      </p>
    );

  return (
    <Panel>
      <div className={styles.quiz}>
        <div className={styles.header}>
          <CountBadge currentCount={quiz.count} totalCount={totalCount} />
          <Timer seconds={seconds} />
        </div>
        <PanelTitle title={quizTitle} />
        {quizCondition}
      </div>
      {!hasAnswered && (
        <div className={styles.answer}>
          <h3 className={styles.answerLabel}>次の中から選択してください。</h3>
          <div className={styles.answerButtonContainer}>
            {quiz.answerOptions.map((value) => (
              <AnswerButton
                key={value}
                label={value}
                onClick={() => onAnswer(value)}
              />
            ))}
          </div>
        </div>
      )}
    </Panel>
  );
};

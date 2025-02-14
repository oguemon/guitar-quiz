import { FC, useMemo } from 'react';
import type { QuizSetting } from '../../../../type';
import styles from './RulePanel.module.css';

type Props = {
  setting: QuizSetting;
};

export const RulePanel: FC<Props> = ({ setting }) => {
  const quizType = useMemo(() => {
    if (setting.type === 'NoteQuiz') return '音名当て';
    return '';
  }, []);

  const quizAnswerOptions = useMemo(() => {
    if (setting.answerOptions === 'only-c-maj') return 'C-major';
    return '全て';
  }, []);
  const quizStrings = useMemo(() => {
    return setting.targetString.join('｜');
  }, []);

  return (
    <div className={styles.module}>
      <h3 className={styles.title}>ルール</h3>
      <div className={styles.ruleList}>
        <div className={styles.ruleCapsule}>
          <div>種別</div>
          <div>{quizType}</div>
        </div>
        <div className={styles.ruleCapsule}>
          <div>音名</div>
          <div>{quizAnswerOptions}</div>
        </div>
        <div className={styles.ruleCapsule}>
          <div>弦</div>
          <div>{quizStrings}弦</div>
        </div>
      </div>
    </div>
  );
};

import { FC } from 'react';
import { ANSWER_OPTION_MAP, QUIZ_TITLE_MAP } from '../../../../constants';
import type { QuizSetting } from '../../../../type';
import styles from './RulePanel.module.css';

type Props = {
  setting: QuizSetting;
};

export const RulePanel: FC<Props> = ({ setting }) => {
  const quizType = QUIZ_TITLE_MAP[setting.type];
  const quizAnswerOptions = ANSWER_OPTION_MAP[setting.answerOptions];
  const quizStrings = setting.targetString.join('｜');

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

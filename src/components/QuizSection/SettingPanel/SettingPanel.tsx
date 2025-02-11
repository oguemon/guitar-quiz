import { FC } from 'react';
import type { QuizSetting, StringPosition } from '../../../type';
import { MultipleCheckGroup } from './MultipleCheckGroup/MultipleCheckGroup';
import { SettingListItem } from './SettingListItem/SettingListItem';
import styles from './SettingPanel.module.css';
import { SingleCheckGroup } from './SingleCheckGroup/SingleCheckGroup';

type Props = {
  setting: QuizSetting;
  onChange: (value: QuizSetting) => void;
};

export const SettingPanel: FC<Props> = ({ setting, onChange }) => {
  const handleChangeQuizType = (value: string) => {
    onChange({
      ...setting,
      type: value as QuizSetting['type'],
    });
  };

  const handleChangeAnswerOptions = (value: string) => {
    onChange({
      ...setting,
      answerOptions: value as QuizSetting['answerOptions'],
    });
  };

  const handleChangeTargetString = (value: string) => {
    const selectedString = Number(value) as StringPosition;
    const targetString = setting.targetString.includes(selectedString)
      ? setting.targetString.filter((s) => s !== selectedString)
      : [...setting.targetString, selectedString];
    onChange({
      ...setting,
      targetString,
    });
  };

  const handleChangeTotalCount = (value: string) => {
    onChange({
      ...setting,
      totalCount: Number(value),
    });
  };

  return (
    <div className={styles.module}>
      <h2 className={styles.title}>クイズ設定</h2>
      <ul>
        <SettingListItem title="クイズの種類">
          <SingleCheckGroup
            name="quizType"
            value={setting.type}
            options={[{ value: 'NoteQuiz', label: '音名当て' }]}
            onChange={(value) => handleChangeQuizType(value)}
          />
          <div className={styles.example}>
            {setting.type === 'NoteQuiz'
              ? '弦とフレットの位置から音名を当てるクイズです。'
              : ''}
          </div>
        </SettingListItem>
        <SettingListItem title="音名">
          <SingleCheckGroup
            name="answerOptions"
            value={setting.answerOptions}
            options={[
              { value: 'only-c-maj', label: 'C-major' },
              { value: 'all', label: '全て' },
            ]}
            onChange={(value) => handleChangeAnswerOptions(value)}
          />
          <div className={styles.example}>
            {setting.answerOptions === 'only-c-maj'
              ? '例：A, B, C, D, F, ...'
              : '例：A, A♯, B, C, C♯, ...'}
          </div>
        </SettingListItem>
        <SettingListItem title="弦">
          <MultipleCheckGroup
            name="targetString"
            values={setting.targetString.map((s) => String(s))}
            options={([6, 5, 4, 3, 2, 1] as const).map((value) => ({
              value: String(value),
              label: value + '弦',
            }))}
            onChange={(value) => handleChangeTargetString(value)}
          />
        </SettingListItem>
        <SettingListItem title="問題数">
          <SingleCheckGroup
            name="totalCount"
            value={String(setting.totalCount)}
            options={([3, 5, 10, 30, 60] as const).map((value) => ({
              value: String(value),
              label: value + '問',
            }))}
            onChange={(value) => handleChangeTotalCount(value)}
          />
        </SettingListItem>
      </ul>
    </div>
  );
};

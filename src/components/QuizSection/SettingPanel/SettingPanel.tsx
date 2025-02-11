import { FC } from 'react';
import type { QuizSetting, StringPosition } from '../../../type';
import styles from './SettingPanel.module.css';

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
      <h2>設定</h2>
      <h3>種別</h3>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="quizType"
              value="NoteQuiz"
              checked={setting.type === 'NoteQuiz'}
              onChange={(e) => handleChangeQuizType(e.target.value)}
            />
            音名当て
          </label>
        </li>
      </ul>
      <h3>音名の範囲</h3>
      <ul>
        <li>
          <label>
            <input
              type="radio"
              name="answerOptions"
              value="all"
              checked={setting.answerOptions === 'all'}
              onChange={(e) => handleChangeAnswerOptions(e.currentTarget.value)}
            />
            全て（A, A♯, B, ...）
          </label>
        </li>
        <li>
          <label>
            <input
              type="radio"
              name="answerOptions"
              value="only-c-maj"
              checked={setting.answerOptions === 'only-c-maj'}
              onChange={(e) => handleChangeAnswerOptions(e.currentTarget.value)}
            />
            C-major（A, B, C, ...）
          </label>
        </li>
      </ul>
      <h3>弦の範囲</h3>
      <ul>
        {([1, 2, 3, 4, 5, 6] as const).map((value) => (
          <li>
            <label>
              <input
                type="checkbox"
                name="targetString"
                value={value}
                checked={setting.targetString.includes(value)}
                onChange={(e) =>
                  handleChangeTargetString(e.currentTarget.value)
                }
              />
              {value}弦
            </label>
          </li>
        ))}
      </ul>
      <h3>問題数</h3>
      <select
        name="totalCount"
        value={setting.totalCount}
        onChange={(e) => handleChangeTotalCount(e.currentTarget.value)}
      >
        {[3, 5, 10].map((value) => (
          <option>{value}</option>
        ))}
      </select>
    </div>
  );
};

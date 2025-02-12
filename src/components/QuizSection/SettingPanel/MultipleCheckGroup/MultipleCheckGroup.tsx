import { FC } from 'react';
import styles from './MultipleCheckGroup.module.css';

type Option = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  options: Option[];
  values: string[];
  onChange: (value: string) => void;
};

export const MultipleCheckGroup: FC<Props> = ({
  name,
  options,
  values,
  onChange,
}) => {
  return (
    <ul className={styles.module}>
      {options.map((option) => (
        <li key={option.value} className={styles.listItem}>
          <label>
            <input
              className={styles.inputCheckBox}
              type="checkbox"
              name={name}
              value={option.value}
              checked={values.includes(option.value)}
              onChange={(e) => onChange(e.currentTarget.value)}
            />
            <div className={styles.label}>{option.label}</div>
          </label>
        </li>
      ))}
    </ul>
  );
};

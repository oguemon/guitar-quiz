import { FC } from 'react';
import styles from './SingleCheckGroup.module.css';

type Option = {
  label: string;
  value: string;
};

type Props = {
  name: string;
  options: Option[];
  value: string;
  onChange: (value: string) => void;
};

export const SingleCheckGroup: FC<Props> = ({
  name,
  options,
  value,
  onChange,
}) => {
  return (
    <ul className={styles.module}>
      {options.map((option) => (
        <li key={option.value} className={styles.listItem}>
          <label>
            <input
              className={styles.inputCheckBox}
              type="radio"
              name={name}
              value={option.value}
              checked={option.value === value}
              onChange={(e) => onChange(e.currentTarget.value)}
            />
            <div className={styles.label}>{option.label}</div>
          </label>
        </li>
      ))}
    </ul>
  );
};

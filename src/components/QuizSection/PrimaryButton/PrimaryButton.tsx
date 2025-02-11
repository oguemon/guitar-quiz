import { FC } from 'react';
import styles from './PrimaryButton.module.css';

type Props = {
  label: string;
  disabled?: boolean;
  onClick: () => void;
};

export const PrimaryButton: FC<Props> = ({
  label,
  disabled = false,
  onClick,
}) => {
  return (
    <button
      className={styles.module}
      type="button"
      onClick={() => onClick()}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

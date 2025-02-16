import { FC } from 'react';
import ShareMail from '../../../../../assets/share-mail.svg';
import ShareX from '../../../../../assets/share-x.svg';
import styles from './ShareLink.module.css';

type Props = {
  shareTo: 'x' | 'mail';
  href: string;
};

export const ShareLink: FC<Props> = ({ shareTo, href }) => {
  return shareTo === 'x' ? (
    <a className={styles.shareXLink} href={href} target="_blank">
      <img className={styles.shareImage} src={ShareX} alt="結果をXでポスト" />
    </a>
  ) : (
    <a className={styles.shareMailLink} href={href} target="_blank">
      <img
        className={styles.shareImage}
        src={ShareMail}
        alt="結果を親戚にメール"
      />
    </a>
  );
};

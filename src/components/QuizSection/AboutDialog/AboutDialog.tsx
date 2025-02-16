import * as Dialog from '@radix-ui/react-dialog';
import { FC } from 'react';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import styles from './AboutDialog.module.css';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const AboutDialog: FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Dialog.Root open={isOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>利用前の注意事項</Dialog.Title>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              本サービスは、ギターの弦・フレット位置と、そこを押さえて出る音の対応の暗記を促す問題集です。
            </li>
            <li className={styles.listItem}>
              フレット位置は、0（開放弦）〜11の範囲のみ対応しています。12以上は0〜11の繰り返しだからです。
            </li>
            <li className={styles.listItem}>
              レギュラーチューニング（開放弦6弦から順にE-A-D-G-B-E）が前提です。
            </li>
            <li className={styles.listItem}>
              本サービスは、バグ等の理由により不正な出力を行う場合があります。
            </li>
            <li className={styles.listItem}>
              本サービスは、予告なく内容を変更または削除する場合があります。
            </li>
            <li className={styles.listItem}>
              本サービスを利用して生じた一切の損害およびトラブル等につきまして、運営者（おぐえもん）は一切の責任を負いません。
            </li>
            <li className={styles.listItem}>
              不具合やご要望等がございましたら、おぐえもん（
              <a href="http://x.com/oguemon_com/" target="_blank">
                @oguemon_com
              </a>
              ）までご連絡ください。
            </li>
            <li className={styles.listItem}>
              本サービスのソースコードは
              <a href="https://github.com/oguemon/guitar-quiz" target="_blank">
                GitHub
              </a>
              にございます。
            </li>
          </ul>
          <ButtonContainer>
            <PrimaryButton label="閉じる" onClick={onClose} />
          </ButtonContainer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

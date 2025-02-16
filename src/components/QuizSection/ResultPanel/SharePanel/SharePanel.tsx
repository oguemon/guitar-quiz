import { FC, useMemo } from 'react';
import { generateMailShareLink } from '../../../../functions/generateMailShareLink';
import { generateXShareLink } from '../../../../functions/generateXShareLink';
import type { QuizSetting } from '../../../../type';
import { ShareLink } from './ShareLink/ShareLink';
import styles from './SharePanel.module.css';

type Props = {
  setting: QuizSetting;
  correctCount: number;
  totalCount: number;
  seconds: number;
};

export const SharePanel: FC<Props> = ({
  setting,
  correctCount,
  totalCount,
  seconds,
}) => {
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

  // テキストボックス
  const shareMessage =
    `#ギター指板クイズくん で「${correctCount}点／${totalCount}点満点」取れました！\n` +
    `「${seconds}秒」でこの点数とれるのすごくない？\n` +
    `【ルール】${quizType}／音名${quizAnswerOptions}／${quizStrings}弦\n` +
    'みんなも解いてみよう！\n' +
    'https://guitar-quiz.oguemon.com/';

  // X
  const xBody: string =
    `#ギター指板クイズくん で「${correctCount}問／全${totalCount}問」正解しました！\n` +
    `「${seconds}秒」でこの点数をとれるのすごくない？\n` +
    `【ルール】${quizType}／音名${quizAnswerOptions}／${quizStrings}弦\n\n` +
    'みんなも解いてみよう！\n';
  const xHref = generateXShareLink(xBody);

  // メール
  const mailSubject = 'ギター指板クイズくんで脅威的なスコアが出ました';
  const mailBody =
    '親戚各位\n\n' +
    'お世話になっております、〇〇です。\n' +
    'ところでなのですが、先日「ギター指板クイズくん」というゲームをプレイしまして、\n' +
    `その結果、${totalCount}問中${correctCount}問を正解することができました！\n` +
    `解答にかかった時間は${seconds}秒で、なかなか上出来なのではないかと思います。\n\n` +
    `ちなみに、ルールは「${quizType}」で、音名の範囲は「${quizAnswerOptions}」、対象の弦は「${quizStrings}弦」でした。\n` +
    'ぜひとも皆さんもお試しくださいね。\n\n' +
    'もし質問などがございましたら、このメールにご返信願います。\n' +
    '取り急ぎご報告まで。\n\n' +
    'ギター指板クイズくん\n' +
    'https://guitar-quiz.oguemon.com/';
  const mailHref = generateMailShareLink(mailSubject, mailBody);

  return (
    <div className={styles.module}>
      <textarea className={styles.textarea}>{shareMessage}</textarea>
      <div className={styles.buttonList}>
        <ShareLink shareTo="x" href={xHref} />
        <ShareLink shareTo="mail" href={mailHref} />
      </div>
    </div>
  );
};

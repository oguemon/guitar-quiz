import { useEffect, useState } from 'react';
import { NOTE_MAP } from '../constants';
import { convertToFlat } from '../functions/noteConverter';
import { randomN } from '../functions/random';
import { showConfirmDialog } from '../functions/window';
import type { Quiz, QuizSetting, QuizStatus } from '../type';
import { useTimer } from './useTimer';

export const useQuiz = (setting: QuizSetting) => {
  const answerNotes =
    setting.answerOptions === 'only-c-maj'
      ? [0, 2, 3, 5, 7, 8, 10]
      : [0, 2, 3, 5, 7, 8, 10, 1, 4, 6, 9, 11];
  const totalCount = setting.totalCount;

  const [currentStatus, setCurrentStatus] = useState<QuizStatus>('standby');
  const [question, setQuestion] = useState<Quiz | undefined>(undefined);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [history, setHistory] = useState<boolean[]>([]);
  const [isOpenResultDialog, setIsOpenResultDialog] = useState(false);
  const { seconds, startTimer, stopTimer } = useTimer();

  // MEMO: 結果ダイアログを開いたら1秒後に閉じる
  useEffect(() => {
    let code: number | undefined = undefined;
    if (isOpenResultDialog) {
      code = setTimeout(() => setIsOpenResultDialog(false), 1000);
    }
    return () => clearTimeout(code);
  }, [isOpenResultDialog]);

  const createNoteQuiz = (): Quiz => {
    const targetString = setting.targetString;
    const stringPosition = targetString[randomN(targetString.length - 1)];
    const answerNote = answerNotes[randomN(answerNotes.length - 1)];
    const flatPosition = convertToFlat(stringPosition, answerNote);
    return {
      type: 'NoteQuiz',
      count: (question?.count ?? 0) + 1, // 最初は1問目
      stringPosition,
      flatPosition,
      answerOptions: answerNotes.map((note) => NOTE_MAP[note]),
      answer: NOTE_MAP[answerNote],
    };
  };

  const handleClickStartButton = () => {
    setCurrentStatus('select-answer');
    setQuestion(createNoteQuiz());
    setHistory([]);
    setSelectedAnswer('');
    startTimer();
  };

  const handleAnswer = (value: string) => {
    setCurrentStatus('check-answer');
    const isCorrect = question?.answer === value;
    setHistory((history) => [...history, isCorrect]);
    setSelectedAnswer(value);
    setIsOpenResultDialog(true);
  };

  const handleClickNextButton = () => {
    setCurrentStatus('select-answer');
    setQuestion(createNoteQuiz());
    setSelectedAnswer('');
  };

  const handleClickViewResultButton = () => {
    setCurrentStatus('view-result');
    setQuestion(undefined);
    setSelectedAnswer('');
    stopTimer();
  };

  const handleClickReturnButton = () => {
    if (
      currentStatus !== 'view-result' &&
      !showConfirmDialog('解いた内容が失われます。本当に終了しますか？')
    ) {
      return;
    }

    setCurrentStatus('standby');
    setQuestion(undefined);
    setHistory([]);
    setSelectedAnswer('');
    stopTimer();
  };

  return {
    currentStatus,
    totalCount,
    question,
    selectedAnswer,
    history,
    isOpenResultDialog,
    seconds,
    handleClickStartButton,
    handleAnswer,
    handleClickNextButton,
    handleClickViewResultButton,
    handleClickReturnButton,
  };
};

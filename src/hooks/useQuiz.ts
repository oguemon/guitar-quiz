import { useEffect, useState } from 'react';
import { NOTE_MAP } from '../constants';
import { convertToFret } from '../functions/noteConverter';
import { randomN } from '../functions/random';
import { sendGTagEvent } from '../functions/sendGTagEvent';
import { showConfirmDialog } from '../functions/window';
import type { Quiz, QuizSetting, QuizStatus } from '../type';
import { useTimer } from './useTimer';

export const useQuiz = (setting: QuizSetting) => {
  const notes =
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

  const gTagEventBasicParam = {
    quiz_type: setting.type,
    answer_option: setting.answerOptions,
    target_string: setting.targetString.join(','),
    total_count: setting.totalCount,
  };

  // MEMO: 結果ダイアログを開いたら1秒後に閉じる
  useEffect(() => {
    let code: number | undefined = undefined;
    if (isOpenResultDialog) {
      code = setTimeout(() => setIsOpenResultDialog(false), 1000);
    }
    return () => clearTimeout(code);
  }, [isOpenResultDialog]);

  const createNoteQuiz = (): Quiz => {
    const count = (question?.count ?? 0) + 1; // 最初は1問目
    const targetString = setting.targetString;
    const stringPosition = targetString[randomN(targetString.length - 1)];
    const note = notes[randomN(notes.length - 1)];
    const fretPosition = convertToFret(stringPosition, note);

    if (setting.type === 'NoteQuiz') {
      return {
        type: 'NoteQuiz',
        count,
        stringPosition,
        fretPosition,
        answerOptions: notes.map((note) => NOTE_MAP[note]),
        answer: NOTE_MAP[note],
      };
    } else {
      return {
        type: 'FretQuiz',
        count,
        stringPosition,
        note: NOTE_MAP[note],
        answerOptions: Array.from({ length: 12 }).map((_, i) => String(i)),
        answer: String(fretPosition),
      };
    }
  };

  const startQuiz = () => {
    setCurrentStatus('select-answer');
    setQuestion(createNoteQuiz());
    setHistory([]);
    setSelectedAnswer('');
    startTimer();
  };

  const handleClickStartButton = () => {
    sendGTagEvent('start_quiz', {
      ...gTagEventBasicParam,
    });
    startQuiz();
  };

  const handleClickRetryButton = () => {
    sendGTagEvent('retry_quiz', {
      ...gTagEventBasicParam,
    });
    startQuiz();
  };

  const handleAnswer = (value: string) => {
    const isCorrect = question?.answer === value;
    sendGTagEvent('click_answer', {
      ...gTagEventBasicParam,
      seconds,
      count: question?.count ?? -1,
      is_correct: isCorrect,
    });
    setCurrentStatus('check-answer');
    setHistory((history) => [...history, isCorrect]);
    setSelectedAnswer(value);
    setIsOpenResultDialog(true);
  };

  const handleClickNextButton = () => {
    sendGTagEvent('click_next_quiz', {
      ...gTagEventBasicParam,
      seconds,
      count: question?.count ?? -1,
    });
    setCurrentStatus('select-answer');
    setQuestion(createNoteQuiz());
    setSelectedAnswer('');
  };

  const handleClickViewResultButton = () => {
    const correctCount = history.filter((isCorrect) => isCorrect).length;
    sendGTagEvent('show_result', {
      ...gTagEventBasicParam,
      seconds,
      correct_count: correctCount,
    });
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

    sendGTagEvent('return_home', {
      ...gTagEventBasicParam,
      seconds,
      count: question?.count ?? -1,
      is_result_view: currentStatus === 'view-result',
    });
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
    handleClickRetryButton,
    handleAnswer,
    handleClickNextButton,
    handleClickViewResultButton,
    handleClickReturnButton,
  };
};

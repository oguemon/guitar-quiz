import type { QuizSetting } from './type';

/** 音名の一覧。プログラム上では原則音名をAを先頭とする0始まりの数値として扱う */
export const NOTE_MAP = [
  'A',
  'A♯ / B♭',
  'B',
  'C',
  'C♯ / D♭',
  'D',
  'D♯ / E♭',
  'E',
  'F',
  'F♯ / G♭',
  'G',
  'G♯ / A♭',
] as const;

/** クイズの種類ごとの日本語名称 */
export const QUIZ_TITLE_MAP: Record<QuizSetting['type'], string> = {
  NoteQuiz: '音名当て',
  FretQuiz: 'フレット当て',
};

/** クイズの種類ごとの日本語名称 */
export const ANSWER_OPTION_MAP: Record<QuizSetting['answerOptions'], string> = {
  all: '全て',
  'only-c-maj': 'C-major',
};

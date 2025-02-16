export type StringPosition = 1 | 2 | 3 | 4 | 5 | 6;

type NoteQuizSetting = {
  type: 'NoteQuiz';
  answerOptions: 'all' | 'only-c-maj';
  targetString: StringPosition[];
  totalCount: number;
};

type FretQuizSetting = {
  type: 'FretQuiz';
  answerOptions: 'all' | 'only-c-maj';
  targetString: StringPosition[];
  totalCount: number;
};

export type QuizSetting = NoteQuizSetting | FretQuizSetting;

export type NoteQuiz = {
  type: 'NoteQuiz';
  count: number;
  stringPosition: number;
  fretPosition: number;
  answerOptions: string[];
  answer: string; // 音名
};

export type FretQuiz = {
  type: 'FretQuiz';
  count: number;
  stringPosition: number;
  note: string;
  answerOptions: string[];
  answer: string; // フレット位置
};

export type Quiz = NoteQuiz | FretQuiz;

export type QuizStatus =
  | 'standby'
  | 'select-answer'
  | 'check-answer'
  | 'view-result';

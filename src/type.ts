export type StringPosition = 1 | 2 | 3 | 4 | 5 | 6;

type NoteQuizSetting = {
  type: 'NoteQuiz';
  answerOptions: 'all' | 'only-c-maj';
  targetString: StringPosition[];
  totalCount: number;
};

export type QuizSetting = NoteQuizSetting;

export type NoteQuiz = {
  type: 'NoteQuiz';
  count: number;
  stringPosition: number;
  flatPosition: number;
  answerOptions: string[];
  answer: string;
};

export type Quiz = NoteQuiz;

export type QuizStatus =
  | 'standby'
  | 'select-answer'
  | 'check-answer'
  | 'view-result';

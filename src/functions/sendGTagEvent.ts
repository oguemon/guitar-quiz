// MEMO: GTagのイベント名の命名規則に合わせてsnake_caseとしている
type EventName =
  | 'start_quiz'
  | 'click_answer'
  | 'click_next_quiz'
  | 'show_result'
  | 'retry_quiz'
  | 'return_home';

// MEMO: GTagのイベントパラメータ名の命名規則に合わせてsnake_caseとしている
type EventBaseParam = {
  quiz_type: string;
  answer_option: string;
  target_string: string;
  total_count: number;
};

type EventParam = {
  start_quiz: EventBaseParam;
  click_answer: EventBaseParam & {
    seconds: number;
    count: number;
    is_correct: boolean;
  };
  click_next_quiz: EventBaseParam & {
    seconds: number;
    count: number;
  };
  show_result: EventBaseParam & {
    seconds: number;
    correct_count: number;
  };
  retry_quiz: EventBaseParam;
  return_home: EventBaseParam & {
    seconds: number;
    count: number;
    is_result_view: boolean;
  };
};

export const sendGTagEvent = <T extends EventName>(
  eventName: T,
  params: EventParam[T]
) => {
  window.gtag('event', eventName, params);
};

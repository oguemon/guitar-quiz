import { FC } from 'react';
import type { QuizSetting } from '../../../type';
import { ButtonContainer } from '../ButtonContainer/ButtonContainer';
import { NormalButton } from '../NormalButton/NormalButton';
import { Panel } from '../Panel/Panel';
import { PanelTitle } from '../PanelTitle/PanelTitle';
import { PrimaryButton } from '../PrimaryButton/PrimaryButton';
import { ResultDetail } from './ResultDetail/ResultDetail';
import { ResultSummary } from './ResultSummary/ResultSummary';
import { RulePanel } from './RulePanel/RulePanel';
import { SharePanel } from './SharePanel/SharePanel';

type Props = {
  setting: QuizSetting;
  history: boolean[];
  totalCount: number;
  seconds: number;
  onClickRetryButton: () => void;
  onClickReturnButton: () => void;
};

export const ResultPanel: FC<Props> = ({
  setting,
  history,
  totalCount,
  seconds,
  onClickRetryButton,
  onClickReturnButton,
}) => {
  const correctCount = history.filter((isCorrect) => isCorrect).length;
  const correctRate = Math.floor((correctCount / totalCount) * 100);
  return (
    <Panel>
      <PanelTitle title="結果発表" />
      <ResultSummary
        correctCount={correctCount}
        correctRate={correctRate}
        totalCount={totalCount}
        seconds={seconds}
      />
      <RulePanel setting={setting} />
      <ResultDetail history={history} />
      <SharePanel
        setting={setting}
        correctCount={correctCount}
        totalCount={totalCount}
        seconds={seconds}
      />
      <ButtonContainer>
        <PrimaryButton
          label="リトライする"
          onClick={() => onClickRetryButton()}
        />
        <NormalButton
          label="最初に戻る"
          onClick={() => onClickReturnButton()}
        />
      </ButtonContainer>
    </Panel>
  );
};

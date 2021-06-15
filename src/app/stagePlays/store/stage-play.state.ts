import { IStagePlay, IStagePlayDetails } from '@stagePlays/interfaces/interfaces';

export const stagePlayStateFeatureKey: string = 'stagePlayStateFeatureKey';

export interface IStageState {
  stagePlayCollection?: IStagePlay[];
  selectedStagePlay?: IStagePlayDetails;
}

export const stagePlayInitialState: IStageState = {
  stagePlayCollection: undefined,
  selectedStagePlay: undefined,
};

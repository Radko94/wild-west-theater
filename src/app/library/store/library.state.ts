import { IStagePlay, IStagePlayDetails } from '../interfaces/interfaces';

export const libraryStateFeatureKey: string = 'libraryStateFeatureKey';

export interface ILibraryState {
  stagePlayCollection?: IStagePlay[];
  selectedStagePlay?: IStagePlayDetails;
}

export const libraryInitialState: ILibraryState = {
  stagePlayCollection: undefined,
  selectedStagePlay: undefined,
};

import { IStagePlay } from "../interfaces/interfaces";

export const libraryStateFeatureKey: string = 'libraryStateFeatureKey';

export interface ILibraryState {
  stagePlayCollection?: IStagePlay[];
}

export const libraryInitialState: ILibraryState = {
  stagePlayCollection: undefined
}

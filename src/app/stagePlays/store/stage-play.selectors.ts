import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IStageState, stagePlayStateFeatureKey } from './stage-play.state';

const selectStagePlayStateFeature = createFeatureSelector<IStageState>(
  stagePlayStateFeatureKey
);

export const selectStagePlays = createSelector(
  selectStagePlayStateFeature,
  (state: IStageState) => state.stagePlayCollection
);

export const selectSelectedStagePlays = createSelector(
  selectStagePlayStateFeature,
  (state: IStageState) => state.selectedStagePlay
);

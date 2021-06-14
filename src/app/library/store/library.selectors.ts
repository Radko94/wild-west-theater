import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ILibraryState, libraryStateFeatureKey } from './library.state';

const selectLibraryStateFeature = createFeatureSelector<ILibraryState>(
  libraryStateFeatureKey
);

export const selectStagePlays = createSelector(
  selectLibraryStateFeature,
  (state: ILibraryState) => state.stagePlayCollection
);

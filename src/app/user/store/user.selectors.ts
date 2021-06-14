import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserState, userStateFeatureKey } from './user.state';

const selectUserStateFeature =
  createFeatureSelector<IUserState>(userStateFeatureKey);

export const selectUser = createSelector(
  selectUserStateFeature,
  (state: IUserState) => state.user
);

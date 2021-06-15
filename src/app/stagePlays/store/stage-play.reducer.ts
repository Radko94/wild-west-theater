import { createReducer, on } from '@ngrx/store';
import { stagePlayInitialState } from './stage-play.state';

import * as actions from './stage-play.actions';

export const stagePlayReducer = createReducer(
  stagePlayInitialState,
  on(actions.stagePlaysSuccess, (state, action) => ({
    ...state,
    stagePlayCollection: action.payload.stagePlays,
  })),
  on(actions.stagePlaySuccess, (state, action) => ({
    ...state,
    selectedStagePlay: action.payload.stagePlay,
  }))
);

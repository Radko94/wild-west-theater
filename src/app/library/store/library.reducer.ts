import { createReducer, on } from '@ngrx/store';
import { libraryInitialState } from './library.state';

import * as actions from './library.actions';

export const libraryReducer = createReducer(
  libraryInitialState,
  on(actions.stagePlaysSuccess, (state, action) => ({
    ...state,
    stagePlayCollection: action.payload.stagePlays,
  })),
  on(actions.stagePlaySuccess, (state, action) => ({
    ...state,
    selectedStagePlay: action.payload.stagePlay,
  }))
);

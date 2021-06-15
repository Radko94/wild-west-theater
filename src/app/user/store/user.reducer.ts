import { createReducer, on } from '@ngrx/store';
import { userInitialState } from './user.state';

import * as actions from './user.actions';

export const userReducer = createReducer(
  userInitialState,
  on(actions.loginSuccess, (state, action) => ({
    ...state,
    errorMessage: undefined,
    user: action.payload.user,
  })),
  on(actions.patchUserRequest, (state, action) => ({
    ...state,
    user: action.payload.user,
  }))
);

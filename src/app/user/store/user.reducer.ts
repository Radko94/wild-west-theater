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
  on(actions.loginError, (state, action) => {
    console.log(state, action)

    return state;
  }),
);

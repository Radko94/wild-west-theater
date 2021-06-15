import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { IUser } from '../interfaces/interfaces';

export const loginRequest = createAction(
  '[USER] LOGIN_REQUEST',
  props<{ payload: { email: string } }>()
);

export const loginSuccess = createAction(
  '[USER] LOGIN_SUCCESS',
  props<{ payload: { user: IUser } }>()
);

export const loginError = createAction(
  '[USER] LOGIN_ERROR',
  props<{ payload: { error: HttpErrorResponse } }>()
);

export const patchUserRequest = createAction(
  '[USER] PATCH_USER_REQUEST',
  props<{ payload: { user: IUser } }>()
);

export const patchUserSuccess = createAction(
  '[USER] PATCH_USER_SUCCESS',
  props<{ payload: { user: IUser } }>()
);

export const patchUserError = createAction(
  '[USER] PATCH_USER_ERROR',
  props<{ payload: { user: IUser } }>()
);

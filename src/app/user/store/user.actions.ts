import { createAction, props } from '@ngrx/store';
import { HttpErrorResponse } from '@angular/common/http';

import { IUser } from '../interfaces/interfaces';

export const loginRequest = createAction(
  '[HEADER] LOGIN_REQUEST',
  props<{ payload: { email: string } }>()
);

export const loginSuccess = createAction(
  '[HEADER] LOGIN_SUCCESS',
  props<{ payload: { user: IUser } }>()
);

export const loginError = createAction(
  '[HEADER] LOGIN_ERROR',
  props<{ payload: { error: HttpErrorResponse } }>()
);

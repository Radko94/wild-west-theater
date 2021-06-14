import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IStagePlay } from '../interfaces/interfaces';

export const syncStagePlays = createAction(
  '[LIBRARY] SYNC_STAGE_PLAYS',
  props<{ payload: {} }>()
);

export const stagePlaysGhost = createAction(
  '[LIBRARY] STAGE_PLAYS_GHOST',
  props<{ payload: {} }>()
);

export const stagePlaysRequest = createAction(
  '[LIBRARY] STAGE_PLAYS_REQUEST',
  props<{ payload: {} }>()
);

export const stagePlaysSuccess = createAction(
  '[LIBRARY] STAGE_PLAYS_SUCCESS',
  props<{ payload: { stagePlays: IStagePlay[] } }>()
);

export const stagePlaysFailure = createAction(
  '[LIBRARY] STAGE_PLAYS_FAILURE',
  props<{ payload: { error: HttpErrorResponse } }>()
);

import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IStagePlay, IStagePlayDetails } from '@library/interfaces/interfaces';

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

export const stagePlayRequest = createAction(
  '[LIBRARY] STAGE_PLAY_REQUEST',
  props<{ payload: { id: string } }>()
);

export const stagePlaySuccess = createAction(
  '[LIBRARY] STAGE_PLAY_SUCCESS',
  props<{ payload: { stagePlay: IStagePlayDetails } }>()
);

export const stagePlayFailure = createAction(
  '[LIBRARY] STAGE_PLAY_FAILURE',
  props<{ payload: { error: HttpErrorResponse } }>()
);

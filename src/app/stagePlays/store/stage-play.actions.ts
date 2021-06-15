import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { IStagePlay, IStagePlayDetails } from '@stagePlays/interfaces/interfaces';

export const syncStagePlays = createAction(
  '[STAGE_PLAY] SYNC_STAGE_PLAYS',
  props<{ payload: {} }>()
);

export const stagePlaysGhost = createAction(
  '[STAGE_PLAY] STAGE_PLAYS_GHOST',
  props<{ payload: {} }>()
);

export const stagePlaysRequest = createAction(
  '[STAGE_PLAY] STAGE_PLAYS_REQUEST',
  props<{ payload: {} }>()
);

export const stagePlaysSuccess = createAction(
  '[STAGE_PLAY] STAGE_PLAYS_SUCCESS',
  props<{ payload: { stagePlays: IStagePlay[] } }>()
);

export const stagePlaysFailure = createAction(
  '[STAGE_PLAY] STAGE_PLAYS_FAILURE',
  props<{ payload: { error: HttpErrorResponse } }>()
);

export const stagePlayRequest = createAction(
  '[STAGE_PLAY] STAGE_PLAY_REQUEST',
  props<{ payload: { id: string } }>()
);

export const stagePlaySuccess = createAction(
  '[STAGE_PLAY] STAGE_PLAY_SUCCESS',
  props<{ payload: { stagePlay: IStagePlayDetails } }>()
);

export const stagePlayFailure = createAction(
  '[STAGE_PLAY] STAGE_PLAY_FAILURE',
  props<{ payload: { error: HttpErrorResponse } }>()
);

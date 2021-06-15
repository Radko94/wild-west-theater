import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';

import * as actions from './stage-play.actions';
import { selectStagePlays } from './stage-play.selectors';
import { IStageState } from './stage-play.state';

import * as enums from '@common/enums';
import { Router } from '@angular/router';
import { StagePlayProxyService } from '@stagePlays/services/stage-play-proxy.service';

@Injectable()
export class StagePlayEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _stagePlayProxy: StagePlayProxyService,
    private readonly _store: Store<IStageState>,
    private readonly _snackbar: MatSnackBar,
    private readonly _router: Router
  ) {}

  public syncStagePlays = createEffect(
    () =>
      this._actions$.pipe(
        ofType<ReturnType<typeof actions.syncStagePlays>>(
          actions.syncStagePlays
        ),
        withLatestFrom(this._store.select(selectStagePlays)),
        map((actionState) =>
          actionState[1]
            ? this._store.dispatch(actions.stagePlaysGhost({ payload: {} }))
            : this._store.dispatch(actions.stagePlaysRequest({ payload: {} }))
        )
      ),
    { dispatch: false }
  );

  public stagePlaysRequest = createEffect(() =>
    this._actions$.pipe(
      ofType<ReturnType<typeof actions.stagePlaysRequest>>(
        actions.stagePlaysRequest
      ),
      switchMap(() =>
        this._stagePlayProxy.getStagePlays().pipe(
          map((response: any) => response.args),
          map((stagePlays) =>
            actions.stagePlaysSuccess({ payload: { stagePlays } })
          ),
          catchError((error: HttpErrorResponse) =>
            of(actions.stagePlaysFailure({ payload: { error } }))
          )
        )
      )
    )
  );

  public stagePlayByIdRequest = createEffect(() =>
    this._actions$.pipe(
      ofType<ReturnType<typeof actions.stagePlayRequest>>(
        actions.stagePlayRequest
      ),
      switchMap((action) =>
        this._stagePlayProxy.getStagePlay(action.payload.id).pipe(
          map((response: any) => response.args),
          map((stagePlay) =>
            actions.stagePlaySuccess({ payload: { stagePlay } })
          ),
          catchError((error: HttpErrorResponse) =>
            of(actions.stagePlayFailure({ payload: { error } }))
          )
        )
      )
    )
  );

  public stagePlaysFailure = createEffect(
    () =>
      this._actions$.pipe(
        ofType<ReturnType<typeof actions.stagePlaysFailure>>(
          actions.stagePlaysFailure
        ),
        map((action) => {
          const statusCode: string = action.payload.error.status.toString();

          if (statusCode.startsWith('4'))
            this._snackbar.open(
              enums.ESnackbarMessages.ClientError,
              enums.ESnackbarActions.Close
            );

          if (statusCode.startsWith('5'))
            this._snackbar.open(
              enums.ESnackbarMessages.ServerError,
              enums.ESnackbarActions.Close
            );
        })
      ),
    { dispatch: false }
  );

  public stagePlayFailure = createEffect(
    () =>
      this._actions$.pipe(
        ofType<ReturnType<typeof actions.stagePlayFailure>>(
          actions.stagePlayFailure
        ),
        map((action) => {
          const statusCode: string = action.payload.error.status.toString();

          if (statusCode.startsWith('4'))
            this._snackbar.open(
              enums.ESnackbarMessages.ClientError,
              enums.ESnackbarActions.Close
            );

          if (statusCode.startsWith('5'))
            this._snackbar.open(
              enums.ESnackbarMessages.ServerError,
              enums.ESnackbarActions.Close
            );

          this._router.navigate(['/stagePlays']);
        })
      ),
    { dispatch: false }
  );
}

import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, withLatestFrom } from 'rxjs/operators';
import { LibraryProxyService } from '../services/library-proxy.service';

import * as actions from './library.actions';
import { selectStagePlays } from './library.selectors';
import { ILibraryState } from './library.state';

import * as enums from '@common/enums';

@Injectable()
export class LibraryEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _libraryProxy: LibraryProxyService,
    private readonly _store: Store<ILibraryState>,
    private readonly _snackbar: MatSnackBar
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
        this._libraryProxy.getStagePlays().pipe(
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

  public stagePlayFailure = createEffect(
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
}

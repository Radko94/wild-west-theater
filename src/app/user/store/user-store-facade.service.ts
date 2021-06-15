import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IUserState } from './user.state';

import * as actions from './user.actions';
import * as selectors from './user.selectors';
import { IUser } from '../interfaces/interfaces';

@Injectable()
export class UserStoreFacadeService {
  constructor(private readonly _store: Store<IUserState>) {}

  public get actions() {
    return {
      login: (email: string) =>
        this._store.dispatch(actions.loginRequest({ payload: { email } })),
      patchUser: (user: IUser) =>
        this._store.dispatch(actions.patchUserRequest({ payload: { user } })),
    };
  }

  public get selectors() {
    return {
      user$: this._store.select(selectors.selectUser),
    };
  }
}

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { selectUser } from '../store/user.selectors';
import { IUserState } from '../store/user.state';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly _store: Store<IUserState>
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this._store.select(selectUser).pipe(
      map(user => !!user)
    );
  }
}

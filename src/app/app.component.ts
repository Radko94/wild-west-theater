import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { IUser } from './user/interfaces/interfaces';
import { userStateFeatureKey } from './user/store/user.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public title: string = 'Wild West Theater';
  public userInitials$: Observable<string>;
  public unsubscribe: Subject<{}>;

  public constructor(private readonly _store: Store) {}

  public ngOnInit(): void {
    this.unsubscribe = new Subject();

    this.userInitials$ = this._store
      .select((state) => state[userStateFeatureKey]?.user)
      .pipe(
        filter<IUser>(Boolean),
        map(
          (user: IUser) =>
            `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`
        ),
        takeUntil(this.unsubscribe)
      );
  }

  public ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}

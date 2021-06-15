import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ILibraryState } from './library.state';

import * as actions from './library.actions';
import * as selectors from './library.selectors';

@Injectable()
export class LibraryStoreFacadeService {
  constructor(private readonly _store: Store<ILibraryState>) {}

  public get actions() {
    return {
      syncStagePlays: () =>
        this._store.dispatch(actions.syncStagePlays({ payload: {} })),
      getStagePlay: (id: string) =>
        this._store.dispatch(actions.stagePlayRequest({ payload: { id } })),
    };
  }

  public get selectors() {
    return {
      stagePlays$: this._store.select(selectors.selectStagePlays),
      selectedStagePlay$: this._store.select(selectors.selectSelectedStagePlays),
    };
  }
}

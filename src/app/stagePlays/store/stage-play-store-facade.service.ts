import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStageState } from './stage-play.state';

import * as actions from './stage-play.actions';
import * as selectors from './stage-play.selectors';

@Injectable()
export class StagePlayStoreFacadeService {
  constructor(private readonly _store: Store<IStageState>) {}

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

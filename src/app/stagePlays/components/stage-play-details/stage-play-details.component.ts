import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { StagePlayStoreFacadeService } from '@stagePlays/store/stage-play-store-facade.service';
import { IStagePlayDetails } from '@stagePlays/interfaces/interfaces';

@Component({
  selector: 'app-stage-play-details',
  templateUrl: './stage-play-details.component.html',
  styleUrls: ['./stage-play-details.component.scss'],
})
export class StagePlayDetailsComponent implements OnInit {
  public selectedStagedPlay$: Observable<IStagePlayDetails>;

  public constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _stagePlayStoreFacade: StagePlayStoreFacadeService
  ) {}

  public ngOnInit(): void {

    this.selectedStagedPlay$ = this._activatedRoute.params
      .pipe(
        map((params) => this._stagePlayStoreFacade.actions.getStagePlay(params.id)),
        switchMap(() => this._stagePlayStoreFacade.selectors.selectedStagePlay$)
      )
  }
}

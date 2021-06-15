import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IStagePlay } from './interfaces/interfaces';
import { StagePlayStoreFacadeService } from './store/stage-play-store-facade.service';

@Component({
  selector: 'app-stages-play',
  templateUrl: './stage-plays.component.html',
  styleUrls: ['./stage-plays.component.scss'],
})
export class StagePlaysComponent implements OnInit {
  public stagePlays$: Observable<IStagePlay[]>;

  constructor(
    private readonly _stagePlayStoreFacade: StagePlayStoreFacadeService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.stagePlays$ = this._stagePlayStoreFacade.selectors.stagePlays$;

    this._stagePlayStoreFacade.actions.syncStagePlays();
  }

  seeDetails(id: string): void {
    this._router.navigate([id], { relativeTo: this._activatedRoute });
  }
}

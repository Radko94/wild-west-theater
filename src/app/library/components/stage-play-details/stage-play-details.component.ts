import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IStagePlayDetails } from '@library/interfaces/interfaces';
import { LibraryStoreFacadeService } from '@library/store/library-store-facade.service';

@Component({
  selector: 'app-stage-play-details',
  templateUrl: './stage-play-details.component.html',
  styleUrls: ['./stage-play-details.component.scss'],
})
export class StagePlayDetailsComponent implements OnInit {
  public selectedStagedPlay$: Observable<IStagePlayDetails>;

  public constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _libraryStoreFacade: LibraryStoreFacadeService
  ) {}

  public ngOnInit(): void {

    this.selectedStagedPlay$ = this._activatedRoute.params
      .pipe(
        map((params) => this._libraryStoreFacade.actions.getStagePlay(params.id)),
        switchMap(() => this._libraryStoreFacade.selectors.selectedStagePlay$)
      )
  }
}

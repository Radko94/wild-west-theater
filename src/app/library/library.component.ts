import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IStagePlay } from './interfaces/interfaces';
import { LibraryStoreFacadeService } from './store/library-store-facade.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss'],
})
export class LibraryComponent implements OnInit {
  public stagePlays$: Observable<IStagePlay[]>;

  constructor(
    private readonly _libraryStoreFacade: LibraryStoreFacadeService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.stagePlays$ = this._libraryStoreFacade.selectors.stagePlays$;

    this._libraryStoreFacade.actions.syncStagePlays();
  }

  seeDetails(id: string): void {
    this._router.navigate([id], { relativeTo: this._activatedRoute });
  }
}

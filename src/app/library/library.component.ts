import { Component, OnInit } from '@angular/core';
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
    private readonly _libraryStoreFacade: LibraryStoreFacadeService
  ) {}

  ngOnInit(): void {
    this.stagePlays$ = this._libraryStoreFacade.selectors.stagePlays$;

    this._libraryStoreFacade.actions.syncStagePlays();
  }
}

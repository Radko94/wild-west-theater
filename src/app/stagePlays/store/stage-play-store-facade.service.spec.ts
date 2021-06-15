import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { StagePlayStoreFacadeService } from './stage-play-store-facade.service';

describe('LibraryStoreFacadeService', () => {
  let service: StagePlayStoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}, {})],
      providers: [StagePlayStoreFacadeService]
    });
    service = TestBed.inject(StagePlayStoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

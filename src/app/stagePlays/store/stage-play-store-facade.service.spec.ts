import { TestBed } from '@angular/core/testing';

import { StagePlayStoreFacadeService } from './stage-play-store-facade.service';

describe('LibraryStoreFacadeService', () => {
  let service: StagePlayStoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagePlayStoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

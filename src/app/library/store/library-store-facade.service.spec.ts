import { TestBed } from '@angular/core/testing';

import { LibraryStoreFacadeService } from './library-store-facade.service';

describe('LibraryStoreFacadeService', () => {
  let service: LibraryStoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryStoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

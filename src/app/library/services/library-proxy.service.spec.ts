import { TestBed } from '@angular/core/testing';

import { LibraryProxyService } from './library-proxy.service';

describe('LibraryProxyService', () => {
  let service: LibraryProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

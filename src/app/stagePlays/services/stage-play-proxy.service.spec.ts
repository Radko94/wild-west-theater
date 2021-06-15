import { TestBed } from '@angular/core/testing';

import { StagePlayProxyService } from './stage-play-proxy.service';

describe('LibraryProxyService', () => {
  let service: StagePlayProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagePlayProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

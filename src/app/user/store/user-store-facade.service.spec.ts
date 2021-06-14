import { TestBed } from '@angular/core/testing';

import { UserStoreFacadeService } from './user-store-facade.service';

describe('UserStoreFacadeService', () => {
  let service: UserStoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserStoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { UserStoreFacadeService } from './user-store-facade.service';

describe('UserStoreFacadeService', () => {
  let service: UserStoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}, {})],
      providers: [UserStoreFacadeService]
    });
    service = TestBed.inject(UserStoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

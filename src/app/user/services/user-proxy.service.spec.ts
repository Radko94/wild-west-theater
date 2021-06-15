import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UserProxyService } from './user-proxy.service';

describe('UserProxyService', () => {
  let service: UserProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UserProxyService],
    });
    service = TestBed.inject(UserProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

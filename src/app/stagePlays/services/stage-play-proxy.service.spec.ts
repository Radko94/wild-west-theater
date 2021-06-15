import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { StagePlayProxyService } from './stage-play-proxy.service';

describe('LibraryProxyService', () => {
  let service: StagePlayProxyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[RouterTestingModule, HttpClientModule, StoreModule.forRoot({}, {})],
      providers: [StagePlayProxyService],
    });
    service = TestBed.inject(StagePlayProxyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

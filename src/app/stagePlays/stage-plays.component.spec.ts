import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';

import { StagePlaysComponent } from './stage-plays.component';
import { StagePlayStoreFacadeService } from './store/stage-play-store-facade.service';

describe('LibraryComponent', () => {
  let component: StagePlaysComponent;
  let fixture: ComponentFixture<StagePlaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}, {}), RouterTestingModule],
      declarations: [StagePlaysComponent],
      providers: [StagePlayStoreFacadeService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagePlaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

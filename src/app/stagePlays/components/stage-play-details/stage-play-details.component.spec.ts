import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { StagePlayStoreFacadeService } from '@stagePlays/store/stage-play-store-facade.service';

import { StagePlayDetailsComponent } from './stage-play-details.component';

describe('StagePlayDetailsComponent', () => {
  let component: StagePlayDetailsComponent;
  let fixture: ComponentFixture<StagePlayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, StoreModule.forRoot({}, {})],
      declarations: [StagePlayDetailsComponent],
      providers: [StagePlayStoreFacadeService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagePlayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

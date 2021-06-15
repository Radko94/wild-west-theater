import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagePlayDetailsComponent } from './stage-play-details.component';

describe('StagePlayDetailsComponent', () => {
  let component: StagePlayDetailsComponent;
  let fixture: ComponentFixture<StagePlayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagePlayDetailsComponent ]
    })
    .compileComponents();
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

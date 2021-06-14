import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagePlayComponent } from './stage-play.component';

describe('StagePlayComponent', () => {
  let component: StagePlayComponent;
  let fixture: ComponentFixture<StagePlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagePlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagePlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

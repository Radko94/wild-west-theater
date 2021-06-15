import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagePlaysComponent } from './stage-plays.component';

describe('LibraryComponent', () => {
  let component: StagePlaysComponent;
  let fixture: ComponentFixture<StagePlaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagePlaysComponent ]
    })
    .compileComponents();
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

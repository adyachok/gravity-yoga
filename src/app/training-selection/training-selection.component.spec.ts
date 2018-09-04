import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingSelectionComponent } from './training-selection.component';

describe('TrainingSelectionComponent', () => {
  let component: TrainingSelectionComponent;
  let fixture: ComponentFixture<TrainingSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountsDialogComponent } from './discounts-dialog.component';

describe('DiscountsDialogComponent', () => {
  let component: DiscountsDialogComponent;
  let fixture: ComponentFixture<DiscountsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

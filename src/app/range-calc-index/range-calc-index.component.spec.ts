import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeCalcIndexComponent } from './range-calc-index.component';

describe('RangeCalcIndexComponent', () => {
  let component: RangeCalcIndexComponent;
  let fixture: ComponentFixture<RangeCalcIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeCalcIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeCalcIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

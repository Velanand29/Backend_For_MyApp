import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeCalcStocksComponent } from './range-calc-stocks.component';

describe('RangeCalcStocksComponent', () => {
  let component: RangeCalcStocksComponent;
  let fixture: ComponentFixture<RangeCalcStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RangeCalcStocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RangeCalcStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

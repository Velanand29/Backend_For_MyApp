import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataUpdaterComponent } from './data-updater.component';

describe('DataUpdaterComponent', () => {
  let component: DataUpdaterComponent;
  let fixture: ComponentFixture<DataUpdaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataUpdaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataUpdaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

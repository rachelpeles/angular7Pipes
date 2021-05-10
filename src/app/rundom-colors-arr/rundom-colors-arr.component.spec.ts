import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RundomColorsArrComponent } from './rundom-colors-arr.component';

describe('RundomColorsArrComponent', () => {
  let component: RundomColorsArrComponent;
  let fixture: ComponentFixture<RundomColorsArrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RundomColorsArrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RundomColorsArrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

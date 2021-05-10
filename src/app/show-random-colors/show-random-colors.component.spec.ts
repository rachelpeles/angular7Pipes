import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRandomColorsComponent } from './show-random-colors.component';

describe('ShowRandomColorsComponent', () => {
  let component: ShowRandomColorsComponent;
  let fixture: ComponentFixture<ShowRandomColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRandomColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRandomColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

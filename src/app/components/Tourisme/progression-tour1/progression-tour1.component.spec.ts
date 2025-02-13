import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionTour1Component } from './progression-tour1.component';

describe('ProgressionTour1Component', () => {
  let component: ProgressionTour1Component;
  let fixture: ComponentFixture<ProgressionTour1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressionTour1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressionTour1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

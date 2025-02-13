import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionTour2Component } from './progression-tour2.component';

describe('ProgressionTour2Component', () => {
  let component: ProgressionTour2Component;
  let fixture: ComponentFixture<ProgressionTour2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressionTour2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressionTour2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

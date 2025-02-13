import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressionTour3Component } from './progression-tour3.component';

describe('ProgressionTour3Component', () => {
  let component: ProgressionTour3Component;
  let fixture: ComponentFixture<ProgressionTour3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressionTour3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressionTour3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

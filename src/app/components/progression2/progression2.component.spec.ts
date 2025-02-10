import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Progression2Component } from './progression2.component';

describe('Progression2Component', () => {
  let component: Progression2Component;
  let fixture: ComponentFixture<Progression2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Progression2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Progression2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

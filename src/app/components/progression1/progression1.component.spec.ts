import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Progression1Component } from './progression1.component';

describe('Progression1Component', () => {
  let component: Progression1Component;
  let fixture: ComponentFixture<Progression1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Progression1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Progression1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

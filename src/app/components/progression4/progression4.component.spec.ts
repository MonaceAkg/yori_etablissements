import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Progression4Component } from './progression4.component';

describe('Progression4Component', () => {
  let component: Progression4Component;
  let fixture: ComponentFixture<Progression4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Progression4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Progression4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

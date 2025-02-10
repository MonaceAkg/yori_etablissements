import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Progression3Component } from './progression3.component';

describe('Progression3Component', () => {
  let component: Progression3Component;
  let fixture: ComponentFixture<Progression3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Progression3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Progression3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

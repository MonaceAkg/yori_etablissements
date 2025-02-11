import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Espace1Component } from './espace1.component';

describe('Espace1Component', () => {
  let component: Espace1Component;
  let fixture: ComponentFixture<Espace1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Espace1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Espace1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

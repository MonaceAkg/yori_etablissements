import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinEtape1Component } from './fin-etape1.component';

describe('FinEtape1Component', () => {
  let component: FinEtape1Component;
  let fixture: ComponentFixture<FinEtape1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinEtape1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinEtape1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

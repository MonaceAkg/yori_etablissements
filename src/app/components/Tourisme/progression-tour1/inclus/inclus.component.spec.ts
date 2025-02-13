import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusComponent } from './inclus.component';

describe('InclusComponent', () => {
  let component: InclusComponent;
  let fixture: ComponentFixture<InclusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InclusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InclusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

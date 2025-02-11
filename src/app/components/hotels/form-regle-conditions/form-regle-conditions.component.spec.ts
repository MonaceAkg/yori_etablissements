import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegleConditionsComponent } from './form-regle-conditions.component';

describe('FormRegleConditionsComponent', () => {
  let component: FormRegleConditionsComponent;
  let fixture: ComponentFixture<FormRegleConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRegleConditionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRegleConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

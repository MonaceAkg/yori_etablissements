import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfoGeneralesComponent } from './form-info-generales.component';

describe('FormInfoGeneralesComponent', () => {
  let component: FormInfoGeneralesComponent;
  let fixture: ComponentFixture<FormInfoGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInfoGeneralesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInfoGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTarifsComponent } from './form-tarifs.component';

describe('FormTarifsComponent', () => {
  let component: FormTarifsComponent;
  let fixture: ComponentFixture<FormTarifsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTarifsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTarifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

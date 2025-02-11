import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLocalisationComponent } from './form-localisation.component';

describe('FormLocalisationComponent', () => {
  let component: FormLocalisationComponent;
  let fixture: ComponentFixture<FormLocalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormLocalisationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLocalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

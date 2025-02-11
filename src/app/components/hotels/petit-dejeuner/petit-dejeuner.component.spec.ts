import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitDejeunerComponent } from './petit-dejeuner.component';

describe('PetitDejeunerComponent', () => {
  let component: PetitDejeunerComponent;
  let fixture: ComponentFixture<PetitDejeunerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetitDejeunerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PetitDejeunerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

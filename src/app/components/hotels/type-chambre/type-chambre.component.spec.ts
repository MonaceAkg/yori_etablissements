import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeChambreComponent } from './type-chambre.component';

describe('TypeChambreComponent', () => {
  let component: TypeChambreComponent;
  let fixture: ComponentFixture<TypeChambreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeChambreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeChambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

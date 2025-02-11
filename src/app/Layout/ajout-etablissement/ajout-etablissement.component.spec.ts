import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEtablissementComponent } from './ajout-etablissement.component';

describe('AjoutEtablissementComponent', () => {
  let component: AjoutEtablissementComponent;
  let fixture: ComponentFixture<AjoutEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutEtablissementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

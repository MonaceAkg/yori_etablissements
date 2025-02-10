import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixEtablissementComponent } from './choix-etablissement.component';

describe('ChoixEtablissementComponent', () => {
  let component: ChoixEtablissementComponent;
  let fixture: ComponentFixture<ChoixEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoixEtablissementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagesEtablissementComponent } from './images-etablissement.component';

describe('ImagesEtablissementComponent', () => {
  let component: ImagesEtablissementComponent;
  let fixture: ComponentFixture<ImagesEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagesEtablissementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagesEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

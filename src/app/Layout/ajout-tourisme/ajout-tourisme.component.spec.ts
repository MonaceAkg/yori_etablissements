import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutTourismeComponent } from './ajout-tourisme.component';

describe('AjoutTourismeComponent', () => {
  let component: AjoutTourismeComponent;
  let fixture: ComponentFixture<AjoutTourismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutTourismeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutTourismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

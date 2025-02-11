import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarifHebergementComponent } from './tarif-hebergement.component';

describe('TarifHebergementComponent', () => {
  let component: TarifHebergementComponent;
  let fixture: ComponentFixture<TarifHebergementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarifHebergementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarifHebergementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

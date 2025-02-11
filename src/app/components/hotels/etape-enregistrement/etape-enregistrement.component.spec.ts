import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtapeEnregistrementComponent } from './etape-enregistrement.component';

describe('EtapeEnregistrementComponent', () => {
  let component: EtapeEnregistrementComponent;
  let fixture: ComponentFixture<EtapeEnregistrementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EtapeEnregistrementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtapeEnregistrementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

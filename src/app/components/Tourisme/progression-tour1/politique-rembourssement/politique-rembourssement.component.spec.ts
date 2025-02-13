import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolitiqueRembourssementComponent } from './politique-rembourssement.component';

describe('PolitiqueRembourssementComponent', () => {
  let component: PolitiqueRembourssementComponent;
  let fixture: ComponentFixture<PolitiqueRembourssementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolitiqueRembourssementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolitiqueRembourssementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
